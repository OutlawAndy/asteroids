/**
 * Animation code based on code written by David Griffiths.
 * Original license below..
 *
 * Copyright (c) 2010 David Griffiths, http://code.google.com/p/animatic/
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const offscreen = (obj) => {
  return obj.x < 0 || window.innerWidth < obj.x || obj.y < 0 || window.innerHeight < obj.y
}

export const drift = (obj) => {
  const maxX = window.innerWidth
  const maxY = window.innerHeight
  let then = Date.now()

  return(() => {
    const now = Date.now()
    const diff = now - then

    if (obj.speed === 0) return then = now
    if (!obj.wrap && offscreen(obj)) {
      obj.gone = true
      return
    }

    let cx = obj.x + diff * obj.speed * Math.sin(obj.heading * Math.PI / 180.0) / 1000
    let cy = obj.y - diff * obj.speed * Math.cos(obj.heading * Math.PI / 180.0) / 1000

    if (obj.wrap) {
      while (cx < 0) { cx = cx + maxX }
      while (cy < 0) { cy = cy + maxY }
      if (cx > maxX) { cx = cx % maxX }
      if (cy > maxY) { cy = cy % maxY }
    }

    obj.x = cx
    obj.y = cy
    then = now
  })
}

export const rotate = (obj) => {
  const rps = 60.0 / obj.rpm
  const sign = rps < 0 ? -1 : 1
  let now = Date.now()
  let then = now + (Math.abs(rps) * 1000)

  return(() => {
    const justNow = Date.now()
    if (then <= justNow) {
      now = justNow
      then = now + (Math.abs(rps) * 1000)
    }
    const prop = (justNow - now) / (then - now)
    obj.tilt = sign * prop * 360.0
  })
}
