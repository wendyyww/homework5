// Add js here.
// document.getElementById("myVideo").load();
var vid = document.getElementById("videoplayer"); 

window.addEventListener("load", function() {
	console.log("page load")
	vid.autoplay = false;
	vid.loop = false;
});

var play = document.getElementById("play")
function playVid() { 
  vid.play(); 
} 
play.addEventListener("click", function() {
  console.log("Play Video");
  playVid();
});

var pause = document.getElementById("pause")
function pauseVid() { 
  vid.pause(); 
} 
pause.addEventListener("click", function() {
  console.log("Pause Video");
  pauseVid();
});

var skip = document.getElementById("skip")
skip.addEventListener("click", function(){
	console.log("Skip Ahead");
	vid.currentTime += 15
	if (vid.currentTime >= vid.duration) {
    vid.currentTime = 0;
  }
	console.log("Video current time is", video.currentTime)
});

var slow = document.getElementById("slower")
function slowerVid() {
    vid.playbackRate /= 2;
}
slow.onclick = function() {
  slowerVid();
  if (vid.playbackRate < 0.5){
    vid.playbackRate = 0.5;
    alert("Video is at slowest speed!");
  }
}

var fast = document.getElementById("faster")
function speedVid() {
    vid.playbackRate *= 2;
}
fast.onclick = function() {
  speedVid();
  if (vid.playbackRate > 2){
    vid.playbackRate = 2;
    alert("Video is at fastest speed!");
  }
}


var slider = document.getElementById("slider");
var vol_value = document.getElementById("volume");
slider.addEventListener("click", function(){
  //console.log(slider.value)
  vid.volume =  slider.value / 100;
  vol_value.innerHTML = vid.volume * 100 + "%";
})

var mute = document.getElementById("mute");
mute.addEventListener("click", function(){
	if (vid.muted){
		vid.muted = false;
		mute.innerHTML = "Mute";
    slider.value = 100;
    vid.volume = slider.value / 100; 
    vol_value.innerHTML = vid.volume * 100 + "%";
		}
	else {
      vid.muted = true;
	   mute.innerHTML = "Unmute";
     slider.value = 0;
     vid.volume = slider.value;
     vol_value.innerHTML = "0%";
	}
}); 


  
