var video = document.querySelector("#player1");
console.log(video.src);
// yep

window.addEventListener("load", function () {
	video.load();
	video.removeAttribute('autoplay');
	video.removeAttribute('loop');
});

document.querySelector("#play").addEventListener("click", function () {
	video.volume = document.querySelector("#slider").value / 100;
	video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate -= 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate += 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime += 10;
	if (video.currentTime == video.duration) {
		video.currentTime = 0;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted == true) {
		video.muted = false;
		this.innerHTML = "Mute";
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function () {
	video.volume = this.value / 100;
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.className = "video oldSchool";
});

document.querySelector("#orig").addEventListener("click", function () {
	video.className = "video";
});
