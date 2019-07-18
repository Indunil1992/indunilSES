let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = function (event, context, callback) {

    ses.sendEmail({
        Destination: {
            ToAddresses: ['sachithrarajapakse1992@gmail.com'],
            CcAddresses: [],
            BccAddresses: []
        },
        Message: {
            Body: {
                Text: {
                    Data: ''
                }
            },
            Subject: {
                Data: 'dsds'
            }
        },
        Source: 'indunil@adroitlogic.com'
    }, function (err, data) {
        if (err) console.log(err, err.stack, "not suc"); // an error occurred
        else console.log(data, "suc");           // successful response
    });




    callback(null, { "message": "Successfully API executed" });
}