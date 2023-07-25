/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

ranges[0].addEventListener('input',()=>{
	video.volume=ranges[0].value
})
ranges[1].addEventListener('input',()=>{
	video.playbackRate=ranges[1].value
})
toggle.addEventListener('click',()=>{
    if(toggle.innerText=='►'){
        video.play()
        toggle.innerText="❚ ❚"
    }
    else{
        video.pause()
        toggle.innerText="►"
    }
})
video.addEventListener('timeupdate',()=>{
    let prog=document.getElementsByClassName('progress__filled')[0]
    prog.style.flexBasis=`${(video.currentTime/video.duration)*100}%`
    console.log((video.currentTime/video.duration)*100)
    console.log('sex')
})
skipButtons[0].addEventListener('click',()=>{
    video.currentTime=video.currentTime-10
})
skipButtons[1].addEventListener('click',()=>{
    video.currentTime=video.currentTime+25
})