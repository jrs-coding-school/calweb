$(document).ready(function () {
  page.init();
});


var page = {
  deleteArticle: function (idx) {

    blogData.splice(idx,1);
    $('.blog').html('');
    page.renderArticles(blogData);
  },
    init: function () {
      page.initStyling();
      page.initEvents();
      
    },
    initStyling: function () {
      page.renderArticles(blogData);
      page.loadTemplate($('aside'), {}, $('#asideTmpl').html());
    },
    initEvents: function () {
      $('.container').on('click', '.delete', function (event) {
        event.preventDefault();
        var articleId = $(this).closest('article').data('id');
        page.deleteArticle(articleId)
      });
      $('form').on('submit', function (event) {
        event.preventDefault();
        var newArticle = {
          title: $('input[name="title"]').val(),
          content: $('textarea').val(),
          author: $('input[name="author"]').val()
        };
        blogData.push(newArticle);
        var articleId = blogData.indexOf(newArticle);
        newArticle.id = articleId;
        page.loadTemplate($('.blog'), newArticle, $('#articleTmpl').html());
        $('aside input').val('');
        $('aside textarea').val('');

      });
      $('nav').on('click', 'a', function (event) {
        event.preventDefault();
        var sectionClass = '.' + $(this).attr('rel');
        var $pageSection = $(sectionClass);
        $pageSection.addClass('active-section');
        $pageSection.siblings('section').removeClass('active-section');

      });

      $('aside').on('click', 'li', function (event) {
        console.log('event.target', event.target);
        console.log('this', this);
        $(this).toggleClass('makeGreen');
        page.alertMe();
      });

      $('article').on('mouseover', function (event) {
        page.logMe(event.target)
      });

    },
    loadTemplate: function ($el, data, tmpl) {
      var template = _.template(tmpl);
      var html = template(data);
      $el.append(html);
    },
    renderArticles: function (arr) {
      _.each(arr, function (currEl, idx) {
        currEl.id = idx;

        page.loadTemplate($('.blog'), currEl, $('#articleTmpl').html());
      });
    },
    alertMe: function (msg) {
      alert(msg);
      page.logMe(msg);
    },
    logMe: function (msg) {
      console.log(msg);
    }

};
