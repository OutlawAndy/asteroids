import { drift, rotate } from "./motion.js"

export default class Actor {
  size = { width: 0, height: 0 }
  tilt = 0
  gone = false
  wrap = false

  constructor(x, y, heading = 0, speed = 0, rpm = 0) {
    this.x = x
    this.y = y
    this.heading = heading
    this.speed = speed
    this.rpm = rpm
    this.updatePosition = drift(this)
    this.updateOrientation = rotate(this)
  }

  paint(ctx) {
    this.updatePosition()
    this.updateOrientation()

    ctx.translate(this.x, this.y)
    ctx.rotate(this.tilt * Math.PI / 180)
    ctx.rotate(this.heading * Math.PI / 180)
    if (this.image) ctx.drawImage(this.image, this.origin.x, this.origin.y, this.size.width, this.size.height)
  }

  isHitBy(x, y) {
    const xDistance = Math.abs(x - this.x)
    const yDistance = Math.abs(y - this.y)
    return ((xDistance < this.size.width + 3) && (yDistance < this.size.height + 3))
  }

  get origin() {
    return ({
      x: -(this.size.width / 2),
      y: -(this.size.height / 2)
    })
  }
}
