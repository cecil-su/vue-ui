import mojs from 'mo-js'

function extend (a, b) {
  for (let key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key]
    }
  }
  return a
}

class Anime {
  constructor (el, options) {
    this.el = el
    this.options = {
      tweens: [],
      onCheck: () => { return false }
    }
    this.options = extend({}, this.options)
    extend(this.options, options)
    this.checked = false
    this.el.style.position = 'relative'
    this.timeline = new mojs.Timeline()
    let len = this.options.tweens.length !== 'undefined' ? this.options.tweens.length : 0
    for (let i = 0; i < len; ++i) {
      this.timeline.add(this.options.tweens[i])
    }
    this.el.addEventListener('click', () => {
      this.options.onCheck()
      this.timeline.replay()
    })
  }
}

export const iconHandle = (el) => {
  new Anime(el, {
    tweens: [
      new mojs.Burst({
        parent: el,
        radius: {30: 90},
        count: 6,
        children: {
          fill: '#c0c1c3',
          opacity: 0.6,
          radius: 15,
          duration: 1700,
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }
      }),
      new mojs.Shape({
        parent: el,
        type: 'circle',
        radius: {0: 60},
        fill: 'transparent',
        stroke: '#c0c1c3',
        strokeWidth: {20: 0},
        opacity: 0.6,
        duration: 700,
        easing: mojs.easing.sin.out
      })
    ],
    onCheck: () => {
      console.log('check')
    }
  })
}
