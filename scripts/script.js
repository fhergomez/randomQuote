$(document).ready(function () {

  console.log("I'm ready!!")
  function getColor() {
    var color = "#" + Math.floor(Math.random()*16777215).toString(16);
    return color;
  };

  function getQuote(){
    getColor();
  };

  $("body").css('background-color', getColor());
  $("body").css('color', getColor());

});
