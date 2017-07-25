const Consumer = require('sqs-consumer')
const AWS = require('aws-sdk')

const Dotstar = require('./dotstar')
const secrets = require('./secrets')

AWS.config.update({
  region: 'us-west-1',
  correctClockSkew: true,
  accessKeyId: secrets.aws_access_key_id,
  secretAccessKey: secrets.aws_secret_access_key
})

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-1.amazonaws.com/007381580642/LED-Bar',
  handleMessage: (message, done) => {
    // ...
    done();
  },
  sqs: new AWS.SQS()
});

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
