const Consumer = require('sqs-consumer')
const AWS = require('aws-sdk')

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-1.amazonaws.com/007381580642/LED-Bar',
  handleMessage: (message, done) => {
    // ...
    done()
  }
})

app.on('error', (err) => {
  console.log(err.message)
})

app.start()
