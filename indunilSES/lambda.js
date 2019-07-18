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
                    Data: ''
                }
            },
            Subject: {
                Data: 'subject 1'
            }
        },
        Source: 'indunil@adroitlogic.com',
    }, function (err, data) {
        if (err) console.log(err, err.stack); 
        console.log("err hppend"); // an error occurred
        else console.log(data);   
        console.log("success");        // successful response
    });




    callback(null, { "message": "Successfully API executed" });
}