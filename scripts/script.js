$(document).ready(function () {

  console.log("I'm ready!!")

  // random color
  var currentQuote = '', currentAuthor = '';
  var colors = [];
  for (var i = 0;i < 12;i++) {
    colors.push("#" + Math.floor(Math.random()*16777215).toString(16)) // toString(16) will convert the number into a hexadecimal value
  }
  console.log(colors);
  var color = Math.floor(Math.random()*colors.length);
  console.log(color);


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
        currentAuthor = r.author;
        console.log(currentQuote, currentAuthor);

        // this puts the quote insed the <span id="text"> element
        $('.quote-text').animate({opacity: 0}, 500, function () {
          $(this).animate({opacity: 1}, 500);
          $('#text').html(currentQuote);
        });

        // this puts the author inside the <span id="author"> element
        $('.quote-author').animate({ opacity: 0}, 500, function () {
          $(this).animate({opacity: 1}, 500);
          $('#author').html(currentAuthor);
        })
        $('.button').animate({ backgroundColor: colors[color]}, 1000);
      }
    });
  };

  $('#quote-box').on('click', getQuote());

  $("body").css({
    'background-color': colors[color],
    'color': colors[color]
  });
  // $("body").css('color', getColor());

});
