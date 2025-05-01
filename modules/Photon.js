import Actor from "./actor.js"

export default class Photon extends Actor {
  speed = 1000

  constructor(x, y, heading) {
    super(x, y, heading)
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
