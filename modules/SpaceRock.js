import Actor from './actor.js'

export default class SpaceRock extends Actor {
  size = { width: 20, height: 20 }
  origin = { x: -10, y: -10 }
  tilt = 0
  isRotating = true
  axisProp = 'tilt'
  wrap = true

  constructor(startX, startY, heading, speed, rpm) {
    super(startX, startY, heading)
    this.speed = speed
    this.rpm = rpm

    const imageNumber = Math.floor(Math.random() * 7)
    this.image = document.getElementById('roid' + imageNumber)
  }

  isHitBy = (x, y) => {
    var xDistance = Math.abs(x - this.x)
    var yDistance = Math.abs(y - this.y)
    return ((xDistance < this.size.width + 3) && (yDistance < this.size.height + 3))
  }

  paint(ctx) {
    super.paint(ctx)
    ctx.drawImage(this.image, this.origin.x, this.origin.y, this.size.width, this.size.height)
  }
}
