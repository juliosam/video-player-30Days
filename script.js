const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progreso = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipBtn = player.querySelectorAll('[data-skip]');
const slider = player.querySelectorAll('.player__slider');
const controls = player.querySelector('.player__controls');


let togglePlay = function(){
    const method = video.paused ? 'play' : 'pause';
    video[method]()
} 

function changeIcon(){ const icon = this.paused ? '►' : '❚ ❚';
     toggle.textContent = icon;
}

function skipVideo(){
    video.currentTime += parseFloat(this.dataset.skip)
}

function rangeLine(){
    video[this.name]=this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e){
    let scrubTime = (e.offsetX / progreso.offsetWidth)*video.duration;
    video.currentTime = scrubTime
}


video.addEventListener('click', togglePlay);
video.addEventListener('play', changeIcon);
video.addEventListener('pause', changeIcon);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipBtn.forEach((a)=>a.addEventListener('click', skipVideo))
slider.forEach((a)=>a.addEventListener('change', rangeLine))
slider.forEach((a)=>a.addEventListener('mousemove', rangeLine))

let mouseAbajo = false;
progreso.addEventListener('click', scrub)
progreso.addEventListener('mousemove', (e) => mouseAbajo && scrub(e));
progreso.addEventListener('mousedown', () => mouseAbajo = true);
progreso.addEventListener('mouseup', () => mouseAbajo = false);