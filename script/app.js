var show_name=false;
var glyph = {};
var actualglyph = "";

$("#wrapper").click(function() {
  if(!show_name){
    $("#sprite").css("height","137");
    show_name=true;
  } else {
    $("#sprite").css("height","104");
    glyph = randglyph();
    actualglyph = "url(img/translator.jpg) "+glyph.x+"px "+glyph.y+"px";
    $("#sprite").css("background",actualglyph);
    console.log(actualglyph);
    show_name=false;
  }
});

$(document).ready(function() {
  $("#sprite").css("height","104");
  $("#sprite").css("width","108");
  $("#sprite").css("zoom","2.0");
  glyph = randglyph();
  console.log(glyph);
  actualglyph = "url(img/translator.jpg) "+glyph.x+"px "+glyph.y+"px";
  console.log(actualglyph);
//  $("#sprite").css("background","url(img/translator.jpg) -31px -247px");
  $("#sprite").css("background",actualglyph);
});

function randglyph() {
  var glyph = {
    x : -53-(Math.floor(Math.random()*12)*108)+22,
//    x : -53+22,
    y : -262-(Math.floor(Math.random()*11)*137)+17
  };
  return glyph;
}
