var x = '';
var y = '';
var operator = '';
var print = '';
var calcData = {};

$(document).ready(function(){

  $('.display').text("0");
  $('.clearall').on('click', clearAll);
  $('.numbers').on('click', getNumber);
  $('.operators').not('.negative').on('click', getOperator);
  $('.equal').on('click', calculate);
});

function clearAll(){
  $('.display').removeClass('small-text').text("0");
  x = '';
  y = '';
  operator = '';
  print = '';
}

function getNumber(){

  print += $(this).text();
  if(print.length>10){
    $('.display').addClass('small-text');
  }
  if(print.length>18){
    $('.display').removeClass('small-text').text("Error");
    x = '';
    y = '';
    operator = '';
    print = '';
    return;
  }
  $('.display').empty().text(print);
}

function getOperator(){
  operator = '';
  operator = $(this).text();
  x = $('.display').text();
  $('.display').text("0");
  print = '';
  console.log(x, operator);

}

function calculate(){
  y = $('.display').text();
  print = '';
  calcData = {"x": x, "operator": operator, "y": y};
  send();
}

function send(){
  $.ajax({
        type: "POST",
        url: "/calc",
        dataType: "json",
        data: calcData,
        success: function(data){
          console.log(data);
          calcData = {};
        }
    });
}
