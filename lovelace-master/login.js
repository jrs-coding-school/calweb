var Login = {
  init: function () {
    Login.events();
    Login.styling();
  },
  styling: function () {

  },
  events: function () {
    $('input[name="login"]').click(function (event) {
      event.preventDefault();
      var username = $('input[name="username"]').val();
      var password = $('input[name="password"]').val();
      $('input[name="username"]').val("");
      $('input[name="password"]').val("");
      $.ajax({
        type: 'GET',
        url: chatPage.userURL,
        success:function (data) {
          console.log("Users retrieved: ", data);
          var userArr = data;
          var user = _.find(userArr,function (user) {
            return (user.name===username && user.password ===password);
          });
          if (user){
            chatPage.login(user);
            chatPage.init();
          }
          else{
            alert("Wrong username/password combo.");
          }
        },
        failure:function (data) {
          console.log("Failed to retrieve users: ", data);
        }
      });
    })
    $('input[name="register"]').click(function (event) {
      event.preventDefault();
      var username = $('input[name="username"]').val();
      var password = $('input[name="password"]').val();
      var user = new User(username,password);
      console.log("posting", user);
      $.ajax( {
          url: chatPage.userURL,
          method: 'POST',
          data: user,
          success: function(response) {
              console.log("SUCCESS",response);
              chatPage.currentUser=user;
              chatPage.init();
          },
          failure: function (response) {
            console.log("FAILED", response);
          }
      });
    })

  },
};
