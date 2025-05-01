import Actor from "./actor.js"

export default class Photon extends Actor {
  constructor(x, y, heading) {
    super(x, y, heading)
    this.speed = 1000
  }

  paint(ctx) {
    super.paint(ctx)
    ctx.strokeStyle = "rgb(221, 255, 0)"
    ctx.lineWidth = 3
    ctx.beginPath()
    for (var i = 0; i < 5; i++) {
      ctx.moveTo(0, i * 2.0)
      ctx.lineTo(0, 1 + i * 2.0)
    }
    ctx.closePath()
    ctx.stroke()
  }
}
