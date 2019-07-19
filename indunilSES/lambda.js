let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = function (event, context, callback) {
    ses.sendEmail({
        Destination: {
            ToAddresses: ['indunil@adroitlogic.com'],
            CcAddresses: ['sachithrarajapakse1992@gmail.com'],
            BccAddresses: []
        },
        Message: {
            Body: {
                Html: {
                    Data: '<i>Italic text.</i> <b>Bold text.</b> <big>Big text.</big> '
                }
            },
            Subject: {
                Data: 'new html'
            }
        },
        Source: 'indunil@adroitlogic.com'
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });



    callback(null, { "message": "Successfully BCC executed" });
}