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
                arg: "date",
                required: true,
                type: "string",
                description: "Date of Calculations"
        },
            {
                arg: "tableData",
                required: false,
                type: "string",
                description: "Array of payout values to generate table"
        }],


        notes: "Some Note",
        description: "Email Results from Results Page",
        returns: {
            type: "object",
            root: true
        }

    })

    Results.remoteMethod("emailResultsDashboard", {
        http: {
            path: "/emailResultsDashBoard",
            verb: "POST"
        },
        accepts: [{
                arg: "email",
                required: true,
                type: "string",
                description: "Email to send results to"

        }, {
                arg: "date",
                required: true,
                type: "string",
                description: "Date of Calculations"
        },
            {
                arg: "tableData",
                required: false,
                type: "string",
                description: "Array of payout values to generate table"
        }],


        notes: "Some Note",
        description: "Email Results from Dashboard Page",
        returns: {
            type: "object",
            root: true
        }

    })
    Results.emailResultsDashboard = function(email, date, tabledata) {

        var DOMAIN = 'sandbox51e960fff29c4d61ab5f46a99dfd7938.mailgun.org';
        var api_key = 'key-3134185636bcbeee7f0c041e3d2a6407';
        var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

        var tableData = [1245, 3452, 7688, 8832, 1672, 1837, 4151, 1551, 5151];
        var tableDataCumlative = [1245, 3452, 7688, 8832, 1672, 1837, 4151, 1551, 5151];
        var tableLabels = [62, 63, 64, 65, 66, 67, 68, 69, 70];
        var data = {
            from: 'James Orduno <jorduno19@gmail.com>',
            to: email,
            subject: 'Results from ' + date,
            text: 'Testing some Mailgun awesomness!',
            html: `<html>
                        <div>
                            <h2 style="text-align: center;">SSWhen Results from ${date}</h2>
                        </div>
                        <div align="center">
                            <h4>Payout by Retirement Age</h4>
                            <table style="width:50%; border: 1px solid black; border-collapse: collapse;" align="center">
                              <tr >
                                <th style="border: 1px solid black;">Age</th>
                                <th style="border: 1px solid black;">Monthly</th> 
                                <th style="border: 1px solid black;">Cumulative</th> 
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[0]}</td>
                                <td style="border: 1px solid black;">${tableData[0]}</td> 
                                <td style="border: 1px solid black;">${tableDataCumlative[0]}</td> 
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[1]}</td>
                                <td style="border: 1px solid black;">${tableData[1]}</td>
                                <td style="border: 1px solid black;">${tableDataCumlative[1]}</td>
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[2]}</td>
                                <td style="border: 1px solid black;">${tableData[2]}</td>
                                <td style="border: 1px solid black;">${tableDataCumlative[2]}</td>
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[3]}</td>
                                <td style="border: 1px solid black;">${tableData[3]}</td>
                                <td style="border: 1px solid black;">${tableDataCumlative[3]}</td>
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[4]}</td>
                                <td style="border: 1px solid black;">${tableData[4]}</td>
                                <td style="border: 1px solid black;">${tableDataCumlative[4]}</td>
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[5]}</td>
                                <td style="border: 1px solid black;">${tableData[5]}</td> 
                                <td style="border: 1px solid black;">${tableDataCumlative[5]}</td>
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[6]}</td>
                                <td style="border: 1px solid black;">${tableData[6]}</td> 
                                <td style="border: 1px solid black;">${tableDataCumlative[6]}</td>
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[7]}</td>
                                <td style="border: 1px solid black;">${tableData[7]}</td> 
                                <td style="border: 1px solid black;">${tableDataCumlative[7]}</td>
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[8]}</td>
                                <td style="border: 1px solid black;">${tableData[8]}</td> 
                                <td style="border: 1px solid black;">${tableDataCumlative[8]}</td>
                              </tr>
                            </table>
                        </div>
                    </html>`,
        };

        mailgun.messages().send(data, function(error, body) {
            console.log(body);
        });

    }

    Results.emailResults = function(email, date, tabledata) {

        var DOMAIN = 'sandbox51e960fff29c4d61ab5f46a99dfd7938.mailgun.org';
        var api_key = 'key-3134185636bcbeee7f0c041e3d2a6407';
        var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

        var tableData = [1245, 3452, 7688, 8832, 1672, 1837, 4151, 1551, 5151];
        var tableLabels = [62, 63, 64, 65, 66, 67, 68, 69, 70];
        var data = {
            from: 'James Orduno <jorduno19@gmail.com>',
            to: email,
            subject: 'Results from ' + date,
            text: 'Testing some Mailgun awesomness!',
            html: `<html>
                        <div>
                            <h2 style="text-align: center;">SSWhen Results from ${date}</h2>
                        </div>
                        <div align="center">
                            <h4>Montly Payout by Retirement Age</h4>
                            <table style="width:50%; border: 1px solid black; border-collapse: collapse;" align="center">
                              <tr >
                                <th style="border: 1px solid black;">Age</th>
                                <th style="border: 1px solid black;">Payout</th> 
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[0]}</td>
                                <td style="border: 1px solid black;">${tableData[0]}</td> 
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[1]}</td>
                                <td style="border: 1px solid black;">${tableData[1]}</td> 
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[2]}</td>
                                <td style="border: 1px solid black;">${tableData[2]}</td> 
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[3]}</td>
                                <td style="border: 1px solid black;">${tableData[3]}</td> 
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[4]}</td>
                                <td style="border: 1px solid black;">${tableData[4]}</td> 
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[5]}</td>
                                <td style="border: 1px solid black;">${tableData[5]}</td> 
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[6]}</td>
                                <td style="border: 1px solid black;">${tableData[6]}</td> 
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[7]}</td>
                                <td style="border: 1px solid black;">${tableData[7]}</td> 
                              </tr>
                              <tr align="center">
                                <td style="border: 1px solid black;"> ${tableLabels[8]}</td>
                                <td style="border: 1px solid black;">${tableData[8]}</td> 
                              </tr>
                            </table>
                        </div>
                    </html>`,
        };

        mailgun.messages().send(data, function(error, body) {
            console.log(body);
        });

    }
};
