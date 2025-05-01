import Actor from "./Actor.js"

export default class Photon extends Actor {
  size = { width: 2, height: 20 }
  speed = 1000
  color = "rgb(221, 255, 0)"

  paint(ctx) {
    super.paint(ctx)
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.size.width
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(0, this.size.height)
    ctx.closePath()
    ctx.stroke()
  }
}
