var x = '';
var y = '';
var operator = '';
var print = '';
var objSkillBoxArray = {
    "skills": ["Front End","Clientside Logic", "Serverside Logic"]
}

$(document).ready(function(){
  console.log("jQuery works");
  $('.display').text("0");
  $('.clearall').on('click', clearAll);
  $('.numbers, .operators').not('negative').on('click', getNumber);
   var greeting = {"greeting": "Hi"};
  $.ajax({
        type: "POST",
        url: "/calc",
        dataType: "json",
        data: objSkillBoxArray,
        success: function(data){
          console.log(data);
        }
    });
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
