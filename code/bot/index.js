const Consumer = require('sqs-consumer')

const Dotstar = require('./dotstar')
const secrets = require('./secrets')

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-1.amazonaws.com/007381580642/LED-Bar',
  handleMessage: (message, done) => {
    // ...
    done()
  }
})

let strip = new Dotstar(20, 'A')

strip.init(4000000)
strip.clear()

strip.setAll({
  brightness: 0x99,
  red: 0x66,
  green: 0x33,
  blue: 0x99
})

app.on('error', (err) => {
  console.log(err.message);
})

app.start()
