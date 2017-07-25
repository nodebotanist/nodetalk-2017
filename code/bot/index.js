

const Dotstar = require('./dotstar')
const secrets = require('./secrets')

let strip = new Dotstar(20, 'A')

strip.init(4000000)
strip.clear()

strip.setAll({
  brightness: 0x99,
  red: 0x66,
  green: 0x33,
  blue: 0x99
})
