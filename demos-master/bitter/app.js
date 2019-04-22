$(document).ready(function () {
   bitterPage.init();
});

var bitterPage = {
  init: function() {
    bitterPage.styling();
    bitterPage.events();
  },
  events: function() {
    $('form').on('submit', function(event) {
      event.preventDefault();
      bitterPage.createNewBitter();
    });
    $('.bitters').on('click','.delete',function (event) {
      var $deleteBtn = $(this)
      var bitterID = $deleteBtn.closest('article').data('index');
      bitterPage.deleteBitterInSpace(bitterID,$deleteBtn);
    })
    $('nav a').on('click', function (event) {
      event.preventDefault();
      var element = this
      bitterPage.showActiveSection(element);
    })
    $('body').on('click','.edit', function(e) {
      e.preventDefault();
      var $editField = $(this).siblings('.edit-field')
      $editField.css('display','inline-block');

    })

    $('body').on('click','input[name="edit"]', function(e) {
      e.preventDefault();
      var $submitBtn = $(this);
      var bitterText = $submitBtn.siblings('input[name="bitter"]').val();
      var avatar = $submitBtn.siblings('input[name="avatar"]').val();
      var bitterID = $submitBtn.closest('article').data('index');
      var editedBitter = {
        avatar: avatar,
        bitter: bitterText,
        id: bitterID
      }
      bitterPage.editBitterInSpace(editedBitter,$submitBtn);
    });

  },
  styling: function() {
    bitterPage.grabBittersFromSpace();
  },
  url: "https://tiny-tiny.herokuapp.com/collections/bitters/",
  loadBitters: function(bitterData) {
    var bitterHTML = "";
    _.each(bitterData, function (currVal, idx, arr) {
      bitterHTML += bitterPage.loadTemplate('bitterTmpl',currVal);
    });
    // add giant string of markup to the DOM
    $('.bitters').html(bitterHTML);
  },
  createNewBitter: function() {
    var avatarUrl = $('form > input[name="avatar"]').val();
    var bitterText = $('form > input[name="bitter"]').val();
    var newBitter = {
      avatar: avatarUrl,
      bitter: bitterText
    };
    console.log("NEW BITTER", newBitter)

    bitterPage.sendBitterToSpace(newBitter);
    // sendBitterToSpace

  },
  topThreeBitters: function() {
    var top3 = _.filter(bitterData, function (currItem, idx) {
      return idx < 3;
    });
    $('.contact').append(bitterPage.loadTemplate('bitterTmpl',currItem));
  },
  showActiveSection: function(clickedThingy) {
    var clickedSection = "." + $(clickedThingy).attr('rel');
    $(clickedSection).addClass('active-section');
    $(clickedSection).siblings('section').removeClass('active-section');
  },
  getTemplate: function(name) {
    return _.template(templates[name]);
  },
  loadTemplate: function(name, val) {
    var tmpl = bitterPage.getTemplate(name);
    return tmpl(val);
  },
  sendBitterToSpace: function(bitter) {
    console.log("IN TRANSIT", bitter);
    $.ajax({
      url: bitterPage.url,
      method: 'POST',
      data: bitter,
      success: function(resp) {
        var htmlForArticle = bitterPage.loadTemplate('bitterTmpl',resp);
        $('.bitters').prepend(htmlForArticle);
        $('form > input[type="text"]').val('');
      },
      failure: function(resp) {
        console.log("FAILURE", resp);
      }
    });
  },
  grabBittersFromSpace: function() {
    $.ajax({
      type: 'GET',
      url: bitterPage.url,
      success: function(data) {
        console.log("SUCCESS: ", data);
        bitterPage.loadBitters(data);
      },
      failure: function(data) {
        console.log("FAILURE: ", data);
      }
    });
  },
  editBitterInSpace: function(bitter,$editedField) {
    $.ajax({
      type: 'PUT',
      url: bitterPage.url + bitter.id,
      data: bitter,
      success: function(editedBitter) {
        console.log("I WAS CHANGED: ", editedBitter);
        console.log($editedField);

        $editedField.parent().css('display', 'none');
        $editedField.parent().siblings('p').text(editedBitter.bitter);
        $editedField.parent().siblings('h3').html('<img src="' + editedBitter.avatar +'">');
      },
      failure: function(editedBitter) {
        console.log('IM STILL A FAILURE: ', editedBitter);
      }
    })
  },
  deleteBitterInSpace: function(bitterID,$editedField) {
    $.ajax({
      method: 'DELETE',
      url: bitterPage.url + bitterID,
      success: function(data) {
        console.log("DELETED", data);
        $editedField.closest('article').remove();
      },
      failure: function(data) {
        console.log("ERROR", data);
      }
    });
  }
}



