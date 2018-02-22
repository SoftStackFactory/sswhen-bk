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
                required: true,
                type: "string",
                description: "Base64 code of graph image"
        },
            {
                arg: "tableData",
                required: true,
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
    Results.emailResults = function(email, graphImage, tableData) {

        var DOMAIN = 'Ysandbox51e960fff29c4d61ab5f46a99dfd7938.mailgun.org';
        var api_key = 'key-3134185636bcbeee7f0c041e3d2a6407';
        var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

        var data = {
            from: 'James Orduno <jorduno19@gmail.com>',
            to: email,
            //   cc: 'baz@example.com',
            //   bcc: 'bar@example.com',
            subject: 'Results for....',
            text: 'Testing some Mailgun awesomness!',
            html: "<html>HTML version of the body</html>",
        };

        mailgun.messages().send(data, function(error, body) {
            console.log(body);
        });

    }
};
