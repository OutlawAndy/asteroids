import Actor from './Actor.js'

export default class SpaceRock extends Actor {
  size = { width: 20, height: 20 }
  wrap = true

  constructor(startX, startY, heading, speed, rpm) {
    super(startX, startY, heading, speed, rpm)

    const imageNumber = Math.floor(Math.random() * 7)
    this.image = document.getElementById('roid' + imageNumber)
  }
}
