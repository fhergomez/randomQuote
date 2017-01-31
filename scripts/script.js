$(document).ready(function () {

  console.log("I'm ready!!")

  var colors = [];
  for (var i = 0;i < 12;i++) {
    colors.push("#" + Math.floor(Math.random()*16777215).toString(16)) // toString(16) will convert the number into a hexadecimal value
  }
  console.log(colors);
  var color = Math.floor(Math.random()*colors.length);
  console.log(color);



  function getQuote(){

  };

  $("body").css({
    'background-color': colors[color],
    'color': colors[color]
  });
  // $("body").css('color', getColor());

});
