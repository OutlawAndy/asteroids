export default class Sound {
  constructor(fx) {
    this.media = document.getElementById(fx);
  }

  play() {
    this.media.play()
  }

  stop() {
    this.media.pause()
    this.media.currentTime = 0
  }
}