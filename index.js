// $("#turn_on").click(function () {
//   $("body").removeClass("black");
// });
$(window).load(function () {
  $(".loading").fadeOut("fast");
  $(".container").fadeIn("fast");
});
$("document").ready(function () {
  $("#play").hide();
  $("#play_game").hide();
  $("#hiderow1").hide();
  $("#hiderow2").hide();
  $("#canvas").hide();

  $("#turn_on").click(function () {
    $("#bulb_yellow").addClass("bulb-glow-yellow");
    $("#bulb_red").addClass("bulb-glow-red");
    $("#bulb_blue").addClass("bulb-glow-blue");
    $("#bulb_green").addClass("bulb-glow-green");
    $("#bulb_pink").addClass("bulb-glow-pink");
    $("#bulb_orange").addClass("bulb-glow-orange");
    setTimeout(() => {
      $("body").addClass("nature");
    }, 4000);
    // $("body").addClass("nature");
    $(this)
      .fadeOut("slow")
      .delay(5000)
      .promise()
      .done(function () {
        $("#play").fadeIn("slow");
      });
  });

  $("#play").click(function () {
    // var audio = $(".song")[0];
    // audio.play();
    $("#bulb_yellow").addClass("bulb-glow-yellow-after");
    $("#bulb_red").addClass("bulb-glow-red-after");
    $("#bulb_blue").addClass("bulb-glow-blue-after");
    $("#bulb_green").addClass("bulb-glow-green-after");
    $("#bulb_pink").addClass("bulb-glow-pink-after");
    $("#bulb_orange").addClass("bulb-glow-orange-after");
    $("body").css("backgroud-color", "#FFF");
    $("body").addClass("peach-after");
    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#play_game").fadeIn("slow");
      });
  });
});
$("#play_game").click(function () {
  $("#hiderow1").fadeIn("slow");
  $("#hiderow2").fadeIn("slow");
  $(this).fadeOut("slow");
});

let arr = [3, 4, 5, 6, 7, 8, 9, 10];

function lastTile(){
  if(arr.length === 0){
    var css = `#thecard2:hover {transform: rotateY(180deg)}`;
  var style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName("head")[0].appendChild(style);
  }
}

function openRandomTile() {
  let index = Math.floor(Math.random() * arr.length);
  var css = `#thecard${arr[index]}:hover {transform: rotateY(180deg)}`;
  var style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName("head")[0].appendChild(style);

  arr.splice(index, 1);
}


  if (!arr) {
    setTimeout(() => {
      loop();
    }, 2000);
  }


$("#button1").click(() => {
  openRandomTile();
  lastTile()
});
$("#button2").click(() => {
  openRandomTile();
  lastTile()
  $("#button2").hide();
});
$("#button3").click(() => {
  openRandomTile();
  lastTile()
  $("#button3").hide();
});
$("#button4").click(() => {
  openRandomTile();
  lastTile()
  $("#button4").hide();
});
$("#button5").click(() => {
  openRandomTile();
  lastTile()
  $("#button5").hide();
});
$("#button6").click(() => {
  openRandomTile();
  lastTile()
  $("#button6").hide();
});
$("#button7").click(() => {
  openRandomTile();
  lastTile()
  $("#button7").hide();
});
$("#button8").click(() => {
  openRandomTile();
  lastTile()
  $("#button8").hide();
});
$("#button9").click(() => {
  openRandomTile();
  lastTile()
  $("#button9").hide();
});
$("#button10").click(() => {
  openRandomTile();
  lastTile()
  $("#button10").hide();
});



