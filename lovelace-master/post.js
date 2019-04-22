var Post = {
   init: function() {
        Post.initStyling();
        Post.initEvents();
    },
    styling: function() {},
    events: function() {
      $('.chatter-box').on('submit',function (event) {
        event.preventDefault();
        Post.createPost();
      });
    },
    createPost: function() {
        var user = chatPage.currentUser;
        var newPost = new Message($('.form-control').val(),user.name,user._id, user.avatar);
        $('.form-control').val('');
        $.ajax( {
            url: chatPage.messageURL,
            method: 'POST',
            data: newPost,
            success: function(response) {
                console.log(response);
                var postHTML = chatPage.messageTemplate(response);
                $('.messages').append(postHTML);
            }
        })
    },
}
