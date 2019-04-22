var myNameArray = [
  {
    name: "calvin webster"
  },
  {
    name: "Bear Mize"
  },
  {
    name: "Josh Guion"
  },
  {
    name: "Lindsay Williams"
  }
];

var profileData = [
  {
    photo: 'http://www.placecage.com/c/200/200',
    name: "nic cage",
    bio: "he's kinda weird, but is a coppola, right?"
  },
  {
    photo: 'http://www.fillmurray.com/200/200',
    name: "bill murray",
    bio: "he's cool"
  }

];

var profCard = "<article class=\"profile\">"
  + "<img src=\"<%= photo %>\" />"
  + "<h3><%= name %></h3>"
  + "<p><%= bio %></p>"
  + "</article>";

  var myArrTmpl = [
    "<article class=\"profile\">",
      "<img src=\"<%= photo %>\" />",
      "<h3><%= name %></h3>",
      "<p><%= bio %></p>",
    "</article>"
  ].join("");



// templates!!

var tmpl = _.template(myArrTmpl);
var html = "";
// var html = tmpl({name: "calvin webster"});
_.each(profileData, function (currObj) {
  html += tmpl(currObj);
});
console.log(html); // <h1>calvin webster</h1>"

  $('.container').html(html);
