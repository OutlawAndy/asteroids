import Actor from "./actor.js"

export default class Explosion extends Actor {
  size = { width: 0, height: 0 }

  constructor(startX, startY, heading) {
    super(startX, startY, heading)
    this.image = document.getElementById('explosion')
  }

  expand() {
    this.size.width += 10
    this.size.height += 10
    if (this.size.width == 100) this.gone = true
  }

  paint(ctx) {
    this.expand()

    ctx.globalAlpha = (100 / (this.size.width / 2) * 0.1)
    ctx.translate(this.x, this.y)
    ctx.drawImage(this.image, this.origin.x, this.origin.y, this.size.width, this.size.height)
  }

  get origin() {
    return({
      x: -(this.size.width / 2),
      y: -(this.size.height / 2)
    })
  }
}
