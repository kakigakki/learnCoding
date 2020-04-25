/** @type {HTMLMediaElement} */
const v = document.querySelector("video")
    /** @type {HTMLElement} */
const player = document.querySelector(".player")
const playBtn = document.querySelector(".player__button.toggle")
const volumnRange = document.querySelector("input[name='volume']")
const playbackRate = document.querySelector("input[name='playbackRate']")
const skipBtn1 = document.querySelector("button[data-skip = '-10']")
const skipBtn2 = document.querySelector("button[data-skip = '25']")
const progressFilled = document.querySelector(".progress__filled")
const progress = document.querySelector(".progress")

//监听是否视频播完
v.addEventListener("ended", function() {
    this.currentTime = 0
    playBtn.innerHTML = "►"
})

//监听视频的currentTime是否改变
v.addEventListener("timeupdate", function() {
    let rate = this.currentTime / this.duration
    progressFilled.style.flexBasis = `${rate *100}%`
})

//监听进度条
progress.addEventListener("mousedown", function(event) {
    let proRec = progress.getBoundingClientRect()
    let progressRate = (event.clientX - proRec.left) / proRec.width
    v.currentTime = v.duration * progressRate
    this.onmousemove = function(event) {
        let progressRate = (event.clientX - proRec.left) / proRec.width
        v.currentTime = v.duration * progressRate
        this.onmouseup = function() {
            this.onmousemove = null
            this.onmouseup = null
        }
    }
})

playBtn.addEventListener("click", function() {
    if (v.paused) {
        v.play()
        playBtn.innerHTML = "❚ ❚"
    } else {
        v.pause()
        playBtn.innerHTML = "►"
    }
})

volumnRange.addEventListener("input", function() {
    v.volume = this.value
})
playbackRate.addEventListener("input", function() {
    v.playbackRate = this.value
})

skipBtn1.addEventListener("click", function() {
    v.currentTime += +this.dataset.skip
})
skipBtn2.addEventListener("click", function() {
    v.currentTime += +this.dataset.skip
})