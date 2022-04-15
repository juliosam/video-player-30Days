const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progreso = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipBtn = player.querySelectorAll('[data-skip]');
const slider = player.querySelectorAll('.player__slider');
const controls = player.querySelector('.player__controls');

button.forEach((a=>{a.addEventListener('click', e=>console.log(e))}))
slider.forEach((a=>{a.addEventListener('change', e=>console.log(e))}))