export default class Explosion {
  constructor(startX, startY, heading) {
    this.image = document.getElementById('explosion')
    this.size = { width: 0, height: 0 }
    this.x = startX
    this.y = startY
    this.heading = heading
    this.gone = false
  }

  expand() {
    this.size.width += 10
    this.size.height += 10
    if (this.size.width == 60) this.gone = true
  }

  paint(ctx) {
    this.expand()

    ctx.globalAlpha = (100 / (this.size.width / 2) * 0.1)
    ctx.translate(this.x, this.y)
    ctx.rotate((this.heading * Math.PI / 180) - 90)
    ctx.drawImage(this.image, this.origin.x, this.origin.y, this.size.width, this.size.height)
  }

  get origin() {
    return({
      x: -(this.size.width / 2),
      y: -(this.size.height / 2)
    })
  }
}