var templates = {
  redditTmpl: [
    '<article data-redditid="<%= _id %>">',
      '<h2><%= title %></h2>',
      '<p>',
        '<%= content %>',
      '</p>',
      '<div class="action btn-group">',
        '<button class="btn btn-info" >edit</button><button class="btn btn-danger">delete</button>',
      '</div>',
      '<div class="editing">',
      '<input type="text" name="editTitle" class="editTitle" value="<%= title %>">',
      '<textarea name="editContent" class="editContent" rows="8" cols="40"><%= content %></textarea>',
      '<button type="button" class="submitEdit">submit reddit</button>',
      '</div>',
    '</article>'
  ].join('')
};

var page = {
  redditUrl: 'http://tiny-tiny.herokuapp.com/collections/redditClone',
  init: function () {
    page.initStyling();
    page.initEvents();
  },
  initStyling: function () {
    page.readReddit();
  },
  initEvents: function () {
    $('form').on('submit', function (event) {
      event.preventDefault();
      var newReddit = {
        title: $(this).find('input').val(),
        content: $(this).find('textarea').val()
      };

      page.createReddit(newReddit);
      $('.col-md-8').html('');
      page.readReddit();

    });

    $('.col-md-8').on('click', '.btn-danger', function (event) {
      event.preventDefault();
      var redditId = $(this).closest('article').data('redditid');
      console.log(redditId);
      page.deleteReddit(redditId);
      $(this).closest('article').remove();

    });
    $('.col-md-8').on('click', '.btn-info', function (event) {
      event.preventDefault();
      $(this).closest('article').find('.editing').toggleClass('show');

    });
    $('.col-md-8').on('click', '.submitEdit', function (event) {
      event.preventDefault();
      var editedObj = {
          title: $(this).closest('article').find('.editing').find('input').val(),
          content: $(this).closest('article').find('.editing').find('textarea').val(),
          _id: $(this).closest('article').data('redditid'),
      };
      page.updateReddit(editedObj);

    });
  },
  createReddit: function (newReddit) {
    $.ajax({
      url: page.redditUrl,
      method: 'POST',
      data: newReddit,
      success: function (redditData) {
        console.log(redditData);
      },
      error: function (err) {
        console.log(err);
      }

    });
  },
  readReddit: function () {

    $.ajax({
      url: page.redditUrl,
      method: 'GET',
      success: function (redditData) {
        console.log(redditData);
        page.renderReddits($('.col-md-8'), redditData, templates.redditTmpl);
      },
      error: function (err) {
        console.log(err);
      }

    });

  },
  renderReddits: function ($el, redditsArray, tmpl) {
    var template = _.template(tmpl);
    _.each(redditsArray, function (el) {
      $el.append(template(el));
    });
  },
  updateReddit: function (reddit) {
    $.ajax({
      url: page.redditUrl + '/' + reddit._id,
      method: 'PUT',
      data: reddit,
      success: function (redditData) {
        console.log(redditData);
      },
      error: function (err) {
        console.log(err);
      }

    });
  },
  deleteReddit: function (redditId) {
    $.ajax({
      url: page.redditUrl + '/' + redditId,
      method: 'DELETE',
      success: function (redditData) {
        console.log(redditData);
      },
      error: function (err) {
        console.log(err);
      }

    });
  },
  renderTemplate: function ($el, data, tmpl) {
    var template = _.template(tmpl);
    $el.html(template(data));
  }
};

$(document).ready(function () {
  page.init();
});
