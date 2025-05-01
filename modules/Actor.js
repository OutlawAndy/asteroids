import { drift, rotate } from "./motion.js"

export default class Actor {
  x       = 0
  y       = 0
  heading = 0
  speed   = 0
  gone    = false
  wrap    = false

  constructor(x, y, heading) {
    this.x = x
    this.y = y
    this.heading = heading
    this.drift = drift(this)
    this.rotate = rotate(this)
  }

  paint(ctx) {
    this.drift()

    ctx.translate(this.x, this.y)
    ctx.rotate(this.heading * Math.PI / 180)
  }
}
