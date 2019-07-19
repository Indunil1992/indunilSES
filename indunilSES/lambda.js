let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = function (event, context, callback) {
    ses.sendEmail({
        Destination: {
            ToAddresses: ['sachithrarajapakse1992@gmail.com'],
            CcAddresses: ['indunil@adroitlogic.com'],
            BccAddresses: []
        },
        Message: {
            Body: {
                Html: {
                    Data: '<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a><i>Italic text.</i> <b>Bold text.</b> <big>Big text.</big> '
                }
            },
            Subject: {
                Data: 'new html 1 '
            }
        },
        Source: 'indunil@adroitlogic.com'
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });



    callback(null, { "message": "Successfully BCC executed" });
}