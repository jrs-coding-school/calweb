module.exports = {
  book: [
    '<article>',
      '<img src="<%= cover %>">',
      '<h3><%= title %></h3>',
      '<h4><%= author %></h4>',
      '<p><%= description %></p>',
      '<button class="delete">Delete</button>',
    '</article>'
  ].join(""),
  form: [
    '<input type="text" placholder="Title" name="title">',
    '<input type="text" placholder="description" name="description">',
    '<input type="text" placholder="cover" name="cover">',
    '<input type="text" placholder="author" name="author">',
    '<input type="submit" value="submit">'
  ].join(''),
  header: [
    '<nav>',
      '<h4>Header</h4>',
      '<ul>',
        '<li><a href="#home">Home</a></li>',
        '<li><a href="#addBook">Add Book</a></li>',
        '<li><a href="#about">About</a></li>',
      '</ul>',
    '</nav>'
  ].join(""),
  footer: [
    '<nav>',
      '<h4>Footer</h4>',
      '<ul>',
        '<li><a href="#home">Home</a></li>',
        '<li><a href="#addBook">Add Book</a></li>',
        '<li><a href="#about">About</a></li>',
      '</ul>',
    '</nav>'
  ].join("")
};
