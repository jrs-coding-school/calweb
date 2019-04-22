// $('.edit').on('click', function (event) {
//     event.preventDefault();
//     var element = this
//     juanOnOnePage.showActiveSection(element);
//   })
//   $('body').on('click','.edit', function(e) {
//     e.preventDefault();
//     var $editText = $(this).siblings('.edit-Text')
//     $editText.css('display','inline-block');
//
//   })
//on double-clicking an item, allow them to edit it
 var Edit = {
    $editedField: "",
    init: function() {
      Edit.styling();
      Edit.events();
    },
    styling: function() {
       $('.col-md-4').append('<p class="textEdit">' + chatPage.currentUser.name + '</p>');
    },
    events: function() {
        $('.col-md-4').on('dblclick', '.textEdit', function() {
          Edit.$editedField = $(this).attr('contentEditable', 'true');
          if($(this).text() === chatPage.currentUser.name){
            $(this).attr('contentEditable', 'true');
          } else {
            alert('You cant do that');
          }

        });
        $('.col-md-4').on('keypress', '.textEdit', function(event) {
          if(event.charCode===13){
            chatPage.currentUser.name = $(this).text();
            Edit.editUser(chatPage.currentUser, Edit.$editedField);
            $(this).attr('contentEditable', 'false');
          }
        });

    },

    editUser: function(user,$editedField) {
       $.ajax({
         type: 'PUT',
         url: chatPage.userURL + '/' + user._id,
         data: user,
         success: function(editedUser) {
           console.log("I WAS CHANGED: ", editedUser);
           console.log($editedField);

           // $editedField.parent().css('display', 'none');
           // $editedField.parent().siblings('p').text(editedBitter.bitter);
           // $editedField.parent().siblings('h3').html('<img src="' + editedBitter.avatar +'">');
         },
         failure: function(editedUser) {
           console.log('IM STILL A FAILURE:');
         }
       })
     }


  };
