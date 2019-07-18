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
                    Data: 'S L Software Testing Board (SLSTB) has been conducting ISTQB exams in Sri Lanka for many years now, and has issued ~1,600 certificates (as of Jun 2019), in different areas of software testing. Our mission is to establish, nurture and help the testing profession in Sri Lanka, through globally accepted certifications.'
                }
            },
            Subject: {
                Data: 'test'
            }
        },
        Source: 'indunil@adroitlogic.com'
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });



    callback(null, { "message": "Successfully BCC executed" });
}