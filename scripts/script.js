$(document).ready(function () {

  console.log("I'm ready!!")

  // random color
  var currentQuote = '', currentAuthor = '';
  var colors = [];
  for (var i = 0;i < 12;i++) {
    colors.push("#" + Math.floor(Math.random()*16777215).toString(16)) // toString(16) will convert the number into a hexadecimal value
  }

  var pics = ['./images/img1.jpg','./images/img2.jpg','./images/img3.jpg','./images/img4.jpg','./images/img5.jpg','./images/img6.jpg'];


  function getQuote(){
    $.ajax({
      headers: {
        'X-Mashape-Key': 'utAHNAcb3qmshGyXVyYfQp2RwSB3p1OscH2jsnOyaUOprja5Wd',
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=',
      success: function (response) { // retrieves the data as a JSON object
        console.log(response);
        var r = response;
        console.log(r);
        currentQuote = r.quote;
        currentAuthor = r.author || "unknown";
        console.log(currentQuote, currentAuthor);

        // this puts the quote insed the <span id="text"> element
        $('.quote-text').fadeOut(1000, function () {
          $('#text').html(currentQuote);
        }).fadeIn(1000);

        // this puts the author inside the <span id="author"> element
        $('.quote-author').fadeOut(1000, function () {
          $(this).html("[ " + currentAuthor + " ]");
        }).fadeIn(1000);


        console.log(colors);
        var color = Math.floor(Math.random()*colors.length);
        var bg = Math.floor(Math.random() * pics.length);
        console.log(color);
        $('.button').animate({ backgroundColor: colors[color]}, 1000);
        $("html body").css({
          'background': 'url(' + pics[bg] +') no-repeat center center fixed',
          'background-size': 'cover',
          'color': colors[color]
        });
        $('h1').animate({ color: colors[color]}, 1000);
      }
    });
  };

  function getTweet() {
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  };


  //Loads the initial quote
  getQuote();

  // click-handlers
  $('#new-quote').on('click', getQuote);
  $('#tweet-quote').on('click', getTweet);


  // $("body").css('color', getColor());

});
