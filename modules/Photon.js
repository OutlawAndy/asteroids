import Actor from "./actor.js"

export default class Photon extends Actor {
  speed = 1000
  color = "rgb(221, 255, 0)"
  width = 2

  paint(ctx) {
    super.paint(ctx)
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.width
    ctx.beginPath()
    for (var i = 0; i < 20; i++) {
      ctx.moveTo(0, i)
      ctx.lineTo(0, 1 + i)
    }
    ctx.closePath()
    ctx.stroke()
  }
}
