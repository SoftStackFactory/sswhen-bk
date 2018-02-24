'use strict';

module.exports = function(Results) {
    Results.remoteMethod("emailResults", {
        http: {
            path: "/emailResults",
            verb: "POST"
        },
        accepts: [{
                arg: "email",
                required: true,
                type: "string",
                description: "Email to send results to"

        }, {
                arg: "graphImage",
                required: false,
                type: "string",
                description: "Base64 code of graph image"
        }, {
                arg: "date",
                required: true,
                type: "string",
                description: "Date of Calculations"
        },
            {
                arg: "tableData",
                required: false,
                type: "array",
                description: "Array of payout values to generate table"
        }],


        notes: "Some Note",
        description: "some description",
        returns: {
            type: "object",
            root: true
        }

    })
    Results.emailResults = function(email, graphImage, date, tableImage) {

        // Results.app.models.Email.send({
        //     to: 'jorduno19@gmail.com',
        //     from: 'jorduno19@gmail.com',
        //     subject: 'SSWHEN Results',
        //     text: 'Test Email',
        //     html: 'my <em>html</em>'
        // }, function(err, mail) {
        //     console.log('email sent!');
        //     cb(err);
        // });


        var DOMAIN = 'sandbox51e960fff29c4d61ab5f46a99dfd7938.mailgun.org';
        var api_key = 'key-3134185636bcbeee7f0c041e3d2a6407';
        var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

        // let users = {
        //     "jorduno19@gmail.com": { "name": "James" },
        // }
        var name = "james";
        var tableData = [1245, 3452, 7688, 8832, 1672, 1837];
        var tableLabels = [62, 63, 64, 65, 66, 67];
        var image = ""
        var data = {
            from: 'James Orduno <jorduno19@gmail.com>',
            to: email,
            //   cc: 'baz@example.com',
            //   bcc: 'bar@example.com',
            subject: 'Results from ' + date + " for " + name,
            text: 'Testing some Mailgun awesomness!',
            // 'v:my-custome-data' => "{"name": James}",
            // 'recipient.variables': JSON.stringify(users),
            html: `<html>
                    <p> Welcome ${name}</p>
                    <div>
                        <img src= "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="/>
                    </div>
                    <table style="width:100%">
                      <tr>
                        <th>Age</th>
                        <th>Payout</th> 
                      </tr>
                      <tr>
                        <td> ${tableLabels[1]}</td>
                        <td>${tableData[1]}</td> 
                      </tr>
                      <tr>
                        <td> ${tableLabels[2]}</td>
                        <td>${tableData[2]}</td> 
                      </tr>
                      <tr>
                        <td> ${tableLabels[3]}</td>
                        <td>${tableData[3]}</td> 
                      </tr>
                      <tr>
                        <td> ${tableLabels[4]}</td>
                        <td>${tableData[4]}</td> 
                      </tr>
                      <tr>
                        <td> ${tableLabels[5]}</td>
                        <td>${tableData[5]}</td> 
                      </tr>
                      <tr>
                        <td> ${tableLabels[0]}</td>
                        <td>${tableData[0]}</td> 
                      </tr>
                    </table>
                    </html>`,
        };

        mailgun.messages().send(data, function(error, body) {
            console.log(body);
        });

    }
};
