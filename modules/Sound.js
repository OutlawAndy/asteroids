export default class Sound {
  constructor(fx) {
    this.media = document.getElementById(fx);
  }

  play() {
    this.media.play()
  }

  toggle() {
    if (this.media.paused) {
      this.media.play()
    } else {
      this.media.pause()
    }
  }

  stop() {
    this.media.pause()
    this.media.currentTime = 0
  }
}
