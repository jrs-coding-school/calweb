var templates = {


 topThreeTmpl: ['<article class="topThree">',
                '<h3><img src="<%= avatar %>"></h3>',
               "<p><%= bitter %></p>",
               '<h3><img src="<%= avatar %>"></h3>',
               "<p><%= bitter %></p>",
               '<h3><img src="<%= avatar %>"></h3>',
               "<p><%= bitter %></p>",
               '</article>'].join(""),


 bitterTmpl: ['<article class="bit" data-index="<%= _id %>">',
               '<h3><img src="<%= avatar %>"></h3>',
               "<p><%= bitter %></p>",
              ' <button class="delete">Delete</button>',
              ' <button class="edit">Edit</button>',
              '<section class="edit-field">',
              '<input type="text" name="avatar" value="<%= avatar %>" />',
              '<input type="text" name="bitter" value="<%= bitter %>" />',
              '<input type="submit" name="edit" class="nothing" />',
              '</section></article>'
              ].join("")


}

