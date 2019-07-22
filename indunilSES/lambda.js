let AWS = require('aws-sdk');
const ses = new AWS.SES();


exports.handler = function (event, context, callback) {
    ses.sendEmail({
        Destination: {
            ToAddresses: ['indunil@adroitlogic.com'],
            CcAddresses: [],
            BccAddresses: []
        },
        Message: {
            Body: {
                Text: {
                    Data: 'Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.  '
    				}
            },
            Subject: {
                Data: 'sub '
            }
        },
        Source: 'indunil@adroitlogic.com',
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });




    callback(null, { "message": "Successfully BCC executed" });
}