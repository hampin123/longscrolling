var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");
var icon = document.getElementById("icon");

window.onscroll = function(){


  var y = window.pageYOffset;

  console.log(y);

  counter.style.top = 400 + y * .97 + "px";

  counter.innerHTML = y + "px";

  if (y > 2000) {
    counter.style.backgroundColor = "green";
  }else{
    counter.style.backgroundColor = "blue";}

    icon.style.top = 200 + y  + "px";

  if(y < 2000){

      icon.src="meteor.png";

  }


  else if(y < 8600){

      icon.src="second.png";

  }



  else{

  icon.src="three.png";
 }

};
