$(document).ready(function () {
  page.init();
});

var page = {
  url: 'http://tiy-fee-rest.herokuapp.com/collections/sprinkles',
  init: function () {
    page.initStyling();
    page.initEvents();
  },
  initStyling: function () {
    page.getSprinkles();
  },
  initEvents: function () {
    $('form').on('submit', page.createSprinkle);
    $('.cupcakes').on('click', '.delete', page.deleteEventSprinkle);
  },
  deleteEventSprinkle: function (event) {
    event.preventDefault();
    var sprinkleId = $(this).closest('.sprinkle').data('sprinkleid');
    console.log(sprinkleId);
      $(this).closest('.sprinkle').remove();
      page.deleteSprinkle(sprinkleId);
      $('.cupcakes').html('');
      // page.getSprinkles();
  },
  createSprinkle: function (event) {
    event.preventDefault();
    var newSprinkle = {
      type: $('input[name="type"]').val(),
      flavor: $('input[name="flavor"]').val()
    };
    $('input[type="text"]').val('');
    $.ajax({
      url: page.url,
      method: 'POST',
      data: newSprinkle,
      success: function (resp) {
        console.log(resp);
        $('.cupcakes').html('');
        page.getSprinkles();
      }
    });
  },
  getSprinkles: function () {
    $.ajax({
      url: page.url,
      method: 'GET',
      success: function (cupcakesArr) {
        cupcakesArr.forEach(function (el) {
          $('.cupcakes').append("<div class='sprinkle' data-sprinkleid='"+ el._id +"'><h3>" + el.type + ' - ' + el.flavor + '</h3> <button class="delete">delete</button></div>');
        });
      }
    });
  },
  deleteSprinkle: function (sprinkleId) {

    $.ajax({
      url: page.url + '/' + sprinkleId,
      method: 'DELETE',
      success: function (res) {
        console.log(res);
      }
    });
  }

};
