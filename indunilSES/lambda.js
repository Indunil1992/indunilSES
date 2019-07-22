let AWS = require('aws-sdk');
const ses = new AWS.SES();


exports.handler = function (event, context, callback) {

    ses.sendEmail({
        Destination: {
            ToAddresses: ['indunil@adroitlogic.com'],
            CcAddresses: ['sachithrarajapakse1992@gmail.com', 'hirudinee+aws@adroitlogic.com'],
            BccAddresses: ['indunil@adroitlogic.com', 'sachithrarajapakse1992@gmail.com']
        },
        Message: {
            Body: {
                Text: {
                    Data: 'We have received a request to authorize this email address for use with Amazon SES and Amazon Pinpoint in region US East (N. Virginia). If you requested this verification, please go to the following URL to confirm that you are authorized to use this email address:'
                }
            },
            Subject: {
                Data: 'check new cc and bcc'
            }
        },
        Source: 'hirudinee+aws@adroitlogic.com'
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });


    callback(null, { "message": "Successfully BCC executed" });
}