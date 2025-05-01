export default class Clock {
  #running = false
  #epoch
  #now
  #minutes
  #seconds

  constructor() {
    this.#epoch = new Date()
  }

  tick() {
    if (!this.#running) return

    this.#now = new Date() - this.#epoch
    this.#minutes = Math.floor(this.#now * 0.001 / 60)
    this.#seconds = Math.floor(this.#now * 0.001 % 60)
  }

  read() {
    this.tick()
    return `${this.#minutes}min, ${this.#seconds}sec`
  }

  restart() {
    this.#running = true
    this.#epoch = new Date()
  }

  stop() {
    this.#running = false
  }
}
