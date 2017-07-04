import anime from 'animejs'

class Anime {
  constructor (el, opts) {
    this.el = el
    this.opts = opts || {}
    this.anime = null
    this.options(this.opts)
  }

  options (opts) {
    this.opts = opts || {}
    this.opts.targets = this.el
    this.init()
    return this
  }

  init () {
    this.anime = anime(this.opts)
    return this
  }

  play () {
    this.anime.play()
    return this
  }

  delay (durtaion) {
    this.opts.delay = durtaion
    this.init()
    return this
  }

  stop () {
    this.anime.pause()
    return this
  }
}

export default Anime