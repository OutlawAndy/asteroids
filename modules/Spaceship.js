import Actor from './actor.js';

export default class Spaceship extends Actor {
  size = { width: 50, height: 40 }
  origin = { x: -25, y: -20 }
  wrap = true

  constructor(startX, startY, heading) {
    super(startX, startY, heading)
    this.image = document.getElementById('spaceship');
  }

  veerLeft() {
    this.heading -= 10
  }

  veerRight() {
    this.heading += 10
  }

  accelerate() {
    this.speed += 60
    if (500 <= this.speed) this.speed = 500
  }

  decelerate() {
    this.speed -= 60;
    if (this.speed <= 0) this.speed = 0;
  }

  shoot() {
    const event = new CustomEvent('Spaceship:fire!', {
      detail: { x: this.x, y: this.y, heading: this.heading }
    })
    document.dispatchEvent(event)
  }

  paint(ctx) {
    super.paint(ctx)
    ctx.drawImage(this.image, this.origin.x, this.origin.y, this.size.width, this.size.height)
  }
}
