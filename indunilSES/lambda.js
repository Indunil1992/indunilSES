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
                    Data: 'When you send an email with Amazon SES, the email information you need to provide depends on how you call Amazon SES. You can provide a minimal amount of information and have Amazon SES take care of all of the formatting for you. Or, if you want to do something more advanced like send an attachment, you can provide the raw message yourself. The following sections review what you need to provide when you send an email by using the Amazon SES API, the Amazon SES SMTP interface, or the Amazon SES console.
    '
    			    }
            },
            Subject: {
                Data: 'sub 19'
            }
        },
        Source: 'indunil@adroitlogic.com',
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });

    callback(null, { "message": "Successfully BCC executed" });
}