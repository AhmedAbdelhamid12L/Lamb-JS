var demoElement = document.getElementById("demo");
var imgElement = document.getElementById("img");
var turnOnOffBtn = document.getElementById("turnonoffbtn");

function turnOn() {
  demoElement.style.backgroundColor = "green";
  imgElement.src="pic_bulbon.gif";
  turnOnOffBtn.innerHTML = "turn off";
}

function turnOff() {
  demoElement.style.backgroundColor = "yellow";
  imgElement.src="pic_bulboff.gif";
  turnOnOffBtn.innerHTML = "turn on";
}

function turnOnOff() {
  if(demoElement.style.backgroundColor == "green") {
    turnOff();
  }else {
    turnOn();
  }
}