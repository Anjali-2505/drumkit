var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

drumSelection(this.textContent);
buttonAnimation(this.textContent);
  });
}
document.addEventListener("keypress",function(event){
  drumSelection(event.key);
  buttonAnimation(event.key);
});
function drumSelection(drumName){
  switch (drumName) {
    case "w":
      drumRoll("sounds/crash");
      break;
    case "a":
      drumRoll("sounds/kick-bass");
      break;
    case "s":
      drumRoll("sounds/snare");
      break;
    case "d":
      drumRoll("sounds/tom-1");
      break;
    case "j":
      drumRoll("sounds/tom-2");
      break;
    case "k":
      drumRoll("sounds/tom-3");
      break;
    case "l":
      drumRoll("sounds/tom-4");
      break;
    default:
      console.log(drumName);
  }
}
function drumRoll(audioName) {
  var audio1 = new Audio(audioName + ".mp3");
  audio1.play();
}
function buttonAnimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function(){document.querySelector("."+currentKey).classList.remove("pressed");},100);

}
