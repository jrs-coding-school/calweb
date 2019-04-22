var Display = {
  init: function () {
    Display.events();
    Display.styling();
  },
  events: function () {

  },
  styling:function(){
    setInterval(Display.getMessages,2000);
    $(".messages").removeClass("hidden");
    $(".chatter-box").removeClass("hidden");
    $(".loginSection").addClass("hidden");
    $(".logout").removeClass("hidden");
  },
  loadMessages: function (messageData) {
    $(".messages").html("");
    _.each(messageData,function (message) {
      $(".messages").prepend(chatPage.messageTemplate(message));
    });
    $(".messages").scrollTop($(".messages")[0].scrollHeight);

  },
  getMessages: function () {
    $.ajax({
      type: 'GET',
      url: chatPage.messageURL,
      success:function (data) {

        Display.loadMessages(data);
      },
      failure:function (data) {
        console.log("Failed to retrieve messages: ", data);
      }
    });
  }
}
