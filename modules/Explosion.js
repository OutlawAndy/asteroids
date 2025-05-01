import Actor from "./Actor.js"

export default class Explosion extends Actor {

  constructor(startX, startY, heading) {
    super(startX, startY, heading)
    this.image = document.getElementById('explosion')
  }

  paint(ctx) {
    this.#expand()
    ctx.globalAlpha = (100 / (this.size.width / 2) * 0.1)
    super.paint(ctx)
  }

  #expand() {
    this.size.width += 10
    this.size.height += 10
    if (this.size.width == 100) this.gone = true
  }
}
