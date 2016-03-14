var x = '';
var y = '';
var operator = '';
var print = '';
var calcData = {};

$(document).ready(function(){

  $('.display').text("0");
  $('.clearall').on('click', clearAll);
  $('.numbers').not('.dot').on('click', getNumber);
  $('.operators').not('.negative').on('click', getOperator);
  $('.equal').on('click', calculate);
  $('.dot').on('click', addDecimal);
  $('.negative').on('click', makeNegativeNum);
});
function makeNegativeNum (){

  //check if number is already negative
  if(print.indexOf("-") == -1){    
    print = "-" + print;
  }else{  //if yes, remove negative sign
    print = print.slice(1, print.length);
  }
  $('.display').removeClass('blue-text, small-text').text(print);
}

function addDecimal(){
    // check if number has a decimal point in it if not add to decimal
    if (print.indexOf(".") == -1){
        print += '.';
        // if only has the decimal append 0 in front
        if (print.length == 1){
            print = '0' + print;
        }
    }
    $('.display').removeClass('blue-text, small-text').text(print);
}

function clearAll(){
  $('.display').removeClass('small-text, blue-text').text("0");
  x = '';
  y = '';
  operator = '';
  print = '';
}

function getNumber(){

  print += $(this).text();
  if(print.length>9){
    $('.display').addClass('small-text').text(print);

    if(print.length>18){
      $('.display').removeClass('small-text').text("Error");
      x = '';
      y = '';
      operator = '';
      print = '';
      return;
    }
    return;
  }

  $('.display').removeClass('blue-text, small-text').text(print);
}

function getOperator(){
  operator = '';
  operator = $(this).text();
  x = $('.display').text();
  $('.display').text("0");
  print = '';


}

function calculate(){
  y = $('.display').text();
  print = '';
  calcData = {"x": x, "operator": operator, "y": y};

  switch (operator) {
    case "-":
      send("/subtrac", calcData);
      break;

    case "+":
      send("/add", calcData);
      break;

    case "*":
      send("/multiply", calcData);
      break;

    case "/":
      send("/divide", calcData);
      break;
    default:
      console.log("Incorrect operator");
  }
  x = '';
  y = '';
  operator = '';

}

function send(url, calc){
  $.ajax({
        type: "POST",
        url: url,
        data: calc,
        success: function(data){
          if(checkHowBig(data)){
          $('.display').addClass('blue-text').text(data);
          calcData = {};
          console.log(calcData);
          }
        }
    });
}

function checkHowBig (number) {
  if(number.length>9){
    $('.display').addClass('small-text');
  }
  if(number.length>18){
    $('.display').removeClass('small-text').text("Error");
    x = '';
    y = '';
    operator = '';
    print = '';
    return false;
  }
  return true;
}
