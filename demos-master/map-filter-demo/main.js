var redditArray = redditData.data.children;
var reddit10ups = redditArray.filter(function (item) {
  return item.data.ups > 10;
});

var redditMapped10Ups = reddit10ups.map(function (item) {
  return { title: item.data.title,
           upvotes: item.data.ups,
           downVotes: item.data.downs,
           text: item.data.selftext
  };
});

var redditHTML = "";
reddit10ups.forEach(function (item, idx, arr) {
  // cool stuff here
  redditHTML += "<div class='box'><h3><span>+</span>" + item.data.title + " - ups: " + item.data.ups + "</h3></div>";
});

$(document).ready(function() {

  $('body').html(redditHTML);

});
