module.exports = {
  book: [

      "<img src='<%= cover %>' >",
      "<h3><%= title %></h3>",
      "<h4><%= author %></h4>",
      "<p><%= description %></p>",

  ].join(""),
  form: [
    "<form>",
      "<input type='text' placeholder='Title' name='title'>",
      "<input type='text' placeholder='author' name='author'>",
      "<input type='text' placeholder='cover photo' name='coverPhoto'>",
      "<textarea name='description'></textarea>",
      "<input type='submit' value='add book'>",
    "</form>"
  ].join(""),
  header: [
    "<h2>HEADER</h2>",
    "<nav>",
    "<ul>",
    "<li>home</li>",
    "</ul>",
    "</nav>"
  ].join(""),
  footer: [
    "<h2>Footer</h2>",
    "<nav>",
    "<ul>",
    "<li>home</li>",
    "</ul>",
    "</nav>"
  ].join(""),
};
