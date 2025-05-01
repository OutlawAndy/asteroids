const canvas = document.getElementById('game')

export const fillTextTable = (ctx, leftColumn, rightColumn, lineHeight = 30) => {
  ctx.textAlign = 'left'
  leftColumn.forEach((text, index) => {
    ctx.fillText(text, canvas.width/2 - 150, canvas.height/2 + lineHeight * (index + 1))
  })
  ctx.textAlign = 'right'
  rightColumn.forEach((text, index) => {
    ctx.fillText(text, canvas.width/2 + 150, canvas.height/2 + lineHeight * (index + 1))
  })
  ctx.restore()
}

export const fillTextLine = (ctx, text, style, size, color, offset = 0) => {
  setFontProps(ctx, {size, color, style})
  ctx.fillText(text, canvas.width/2, canvas.height/2 + offset, canvas.width * 0.75)
  ctx.restore()
}

export const setFontProps = (ctx, {size, color, style = 'normal', align = 'center', family = 'Arial'}) => {
  ctx.font = `${style} ${size}pt ${family}`
  ctx.fillStyle = color
  ctx.textAlign = align
}

export const rockCount = defaultValue => {
  const params = new URLSearchParams(window.location.search)
  if (params.has('rocks')) {
    return parseInt(params.get('rocks'));
  } else {
    return defaultValue;
  }
}

export const randomRockParams = () => {
  const x = Math.random() * canvas.width
  const y = Math.random() * canvas.height
  const heading = Math.random() * 360
  const speed = Math.random() * 60
  const rpm = Math.random() * 60 - 30

  return [x, y, heading, speed, rpm]
}
