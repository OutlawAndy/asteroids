import { drift, rotate } from "./motion.js"

export default class Actor {
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
  }
}
