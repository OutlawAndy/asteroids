import { drift } from "./animation.js"

export default class Photon {
  constructor(x, y, heading) {
    this.x = x
    this.y = y
    this.heading = heading
    this.speed = 1000
    this.gone = false
    this.wrap = false
    this.drift = drift(this)
  }

  paint(ctx) {
    this.drift()

    ctx.translate(this.x, this.y)
    ctx.rotate(this.heading * Math.PI / 180)
    ctx.strokeStyle = "rgb(221, 255, 0)"
    ctx.lineWidth = 3
    ctx.beginPath()
    for (var i = 0; i < 5; i++) {
      ctx.moveTo(0, i * 2.0)
      ctx.lineTo(0, 1 + i * 2.0)
    }
    ctx.closePath()
    ctx.stroke()
    // TODO: move this out of Photon and handle in the main loop.
    for (var i = 0; i < rocks.length; i++) {
      if (rocks[i].isHitBy(this.x, this.y)) {
        stats.kills++
        this.gone = true
        rocks[i].gone = true
        explosions.push(new Explosion(rocks[i].x, rocks[i].y, this.heading))
        sounds.push(new Sound('exploder'))
      }
    }
  }
}