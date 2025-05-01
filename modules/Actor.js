import { drift, rotate } from "./motion.js"

export default class Actor {
  x          = 0
  y          = 0
  heading    = 0
  speed      = 0
  gone       = false
  wrap       = false
  axisProp   = 'heading'
  isDrifting = true
  isRotating = false

  constructor(x, y, heading) {
    this.x = x
    this.y = y
    this.heading = heading
    this.drift = drift(this)
    this.rotate = rotate(this)
  }

  paint(ctx) {
    if (this.isDrifting) this.drift()
    if (this.isRotating) this.rotate()

    ctx.translate(this.x, this.y)
    ctx.rotate(this[this.axisProp] * Math.PI / 180)
  }
}
