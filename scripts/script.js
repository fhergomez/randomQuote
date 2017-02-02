$(document).ready(function () {

  console.log("I'm ready!!")

  // random color
  var currentQuote = '', currentAuthor = '';
  var colors = [];
  for (var i = 0;i < 12;i++) {
    colors.push("#" + Math.floor(Math.random()*16777215).toString(16)) // toString(16) will convert the number into a hexadecimal value
  }



  function getQuote(){
    $.ajax({
      headers: {
        'X-Mashape-Key': 'utAHNAcb3qmshGyXVyYfQp2RwSB3p1OscH2jsnOyaUOprja5Wd',
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      success: function (response) { // retrieves the data as a JSON object
        var r = JSON.parse(response);
        console.log(r);
        currentQuote = r.quote;
        currentAuthor = r.author || "unknown";
        console.log(currentQuote, currentAuthor);

        // this puts the quote insed the <span id="text"> element
        $('.quote-text, .button').fadeOut(1000, function () {
          $('#text').html(currentQuote);
        }).fadeIn(1000);

        // this puts the author inside the <span id="author"> element
        $('.quote-author').fadeOut(1000, function () {
          $(this).html("[ " + currentAuthor + " ]");
        }).fadeIn(1000);


        console.log(colors);
        var color = Math.floor(Math.random()*colors.length);
        console.log(color);
        $('.button').animate({ backgroundColor: colors[color]}, 1000);
        $("body").css({
          'background-color': colors[color],
          'color': colors[color]
        });
      }
    });
  };


  //Loads the initial quote
  getQuote();

  // click-handlers
  $('#new-quote').on('click', getQuote);
  $('#tweet-quote').on('click', getTweet);


  // $("body").css('color', getColor());

});
