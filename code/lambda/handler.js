var QUEUE_URL = 'https://sqs.us-west-1.amazonaws.com/007381580642/LED-Bar'
var AWS = require('aws-sdk')
var sqs = new AWS.SQS({region : 'us-west-1'})

module.exports.hello = function(event, context, cb) {
  var params = {
    MessageBody: JSON.stringify(event),
    QueueUrl: QUEUE_URL
  }
  sqs.sendMessage(params, function(err, data){
    if(err) {
      cb('error: Fail Send Message' + err)
    }else{
      cb(null, {
        statusCode: 200,
        body: JSON.stringify({
          id: data.MessageId
        })
      });  // SUCCESS
    }
  })
}
