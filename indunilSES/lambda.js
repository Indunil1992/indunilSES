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
                    Data: 'Are you planning to sit for one of the ISTQB exams in the near future, but have some questions that you would like to clarify before attempting the exam? SLSTB is initiating a program of interactive forums with prospective exam candidates to address all your clarifications. The first forum will be held on Monday 5th August 2019. This meeting will be held at the OPA Auditorium, Stanley Wijesundara Mawatha, Colombo 00700, from 4:30 PM to 7:00 PM.'
                }
            },
            Subject: {
                Data: 'test1'
            }
        },
        Source: 'indunil@adroitlogic.com'
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });



    callback(null, { "message": "Successfully BCC executed" });
}