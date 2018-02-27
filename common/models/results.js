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
        }, {
            arg: "sixtwo",
            required: true,
            type: "number",
            description: "Date of Calculations"
        }, {
            arg: "sixthree",
            required: true,
            type: "number",
            description: "Date of Calculations"
        }, {
            arg: "sixfour",
            required: true,
            type: "number",
            description: "Date of Calculations"
        }, {
            arg: "sixfive",
            required: true,
            type: "number",
            description: "Date of Calculations"
        }, {
            arg: "sixsix",
            required: true,
            type: "number",
            description: "Date of Calculations"
        }, {
            arg: "sixseven",
            required: true,
            type: "number",
            description: "Date of Calculations"
        }, {
            arg: "sixeight",
            required: true,
            type: "number",
            description: "Date of Calculations"
        }, {
            arg: "sixnine",
            required: true,
            type: "number",
            description: "Date of Calculations"
        }, {
            arg: "sevenzero",
            required: true,
            type: "number",
            description: "Date of Calculations"
        }],


        notes: "Some Note",
        description: "Email Results from Results Page",
        returns: {
            type: "object",
            root: true
        }

    })

    Results.emailResults = function(email, date, sixtwo, sixthree, sixfour, sixfive, sixsix, sixseven, sixeight, sixnine, sevenzero) {

        var DOMAIN = 'sandbox51e960fff29c4d61ab5f46a99dfd7938.mailgun.org';
        var api_key = 'key-3134185636bcbeee7f0c041e3d2a6407';
        var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });
        var data = {
            from: 'James Orduno <jorduno19@gmail.com>',
            to: email,
            subject: 'Results from ' + date,
            text: 'Testing some Mailgun awesomness!',
            html: `<html>
                        <body style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">
                        	<table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">
                        		<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        			<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"
                        			 valign="top"></td>
                        			<td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;"
                        			 valign="top">
                        				<div style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                        					<table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;"
                        					 bgcolor="#fff">
                        						<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        							<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 20px;"
                        							 align="center" valign="top">
                        								<table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                        										 valign="top">
                        											<h1 style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 32px; color: #000; line-height: 1.2em; font-weight: 500; text-align: center; margin: 40px 0 0;"
                        											 align="center">
                                                                       SSWhen Results for ${date}
                                                                     </h1>
                        										</td>
                        									</tr>
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                        										 valign="top">
                        											<h2 style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 24px; color: #000; line-height: 1.2em; font-weight: 400; text-align: center; margin: 40px 0 0;"
                        											 align="center">
                                               Monthly Payout by Retirement Age
                                               </h2>
                        										</td>
                        									</tr>
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;"
                        										 align="center" valign="top">
                        											<table style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; text-align: center; width: 50%; margin: auto;">
                        												<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        													<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;"
                        													 valign="top">
                        														<table style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 50%; margin: auto; border-collapse: collapse; border-width: 1px; border-color: black; border-style: solid;">
                        															<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	62
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${sixtwo}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	63
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${sixthree}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	64
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																    ${sixfour}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	65
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${sixfive}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	66
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																${sixsix}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	67
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${sixseven}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	68
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${sixeight}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	69
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																${sixnine}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	70
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																${sevenzero}
                        																</td>
                        															</tr>
                        														</table>
                        													</td>
                        												</tr>
                        											</table>
                        										</td>
                        									</tr>
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td class="content-block aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
                        											<a href="#" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;">
                        												Register
                        											</a>
                        										</td>
                        									</tr>
                        								</table>
                        							</td>
                        						</tr>
                        					</table>
                        				</div>
                        			</td>
                        			<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"
                        			 valign="top"></td>
                        		</tr>
                        	</table>
                        </body>
                    </html>`,
        };

        mailgun.messages().send(data, function(error, body) {
            console.log(body);
        });

    }

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
        }, {
                arg: "sixtwo",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "sixthree",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "sixfour",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "sixfive",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "sixsix",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "sixseven",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "sixeight",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "sixnine",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "sevenzero",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "Csixtwo",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "Csixthree",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "Csixfour",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "Csixfive",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "Csixsix",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "Csixseven",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "Csixeight",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "Csixnine",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }, {
                arg: "Csevenzero",
                required: true,
                type: "number",
                description: "Date of Calculations"
        }
        ],


        notes: "Some Note",
        description: "Email Results from Dashboard Page",
        returns: {
            type: "object",
            root: true
        }

    })
    Results.emailResultsDashboard = function(email, date, sixtwo, sixthree, sixfour, sixfive, sixsix, sixseven, sixeight, sixnine, sevenzero, Csixtwo, Csixthree, Csixfour, Csixfive, Csixsix, Csixseven, Csixeight, Csixnine, Csevenzero) {

        var DOMAIN = 'sandbox51e960fff29c4d61ab5f46a99dfd7938.mailgun.org';
        var api_key = 'key-3134185636bcbeee7f0c041e3d2a6407';
        var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

        var data = {
            from: 'James Orduno <jorduno19@gmail.com>',
            to: email,
            subject: 'Results from ' + date,
            text: 'Testing some Mailgun awesomness!',
            html: `<html>
                        <body style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">
                        	<table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">
                        		<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        			<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"
                        			 valign="top"></td>
                        			<td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;"
                        			 valign="top">
                        				<div style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                        					<table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;"
                        					 bgcolor="#fff">
                        						<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        							<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 20px;"
                        							 align="center" valign="top">
                        								<table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                        										 valign="top">
                        											<h1 style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 32px; color: #000; line-height: 1.2em; font-weight: 500; text-align: center; margin: 40px 0 0;"
                        											 align="center">
                                                                       SSWhen Results for ${date}
                                                                     </h1>
                        										</td>
                        									</tr>
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                        										 valign="top">
                        											<h2 style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 24px; color: #000; line-height: 1.2em; font-weight: 400; text-align: center; margin: 40px 0 0;"
                        											 align="center">
                                               Payout by Retirement Age
                                               </h2>
                        										</td>
                        									</tr>
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;"
                        										 align="center" valign="top">
                        											<table style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; text-align: center; width: 50%; margin: auto;">
                        												<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        													<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;"
                        													 valign="top">
                        														<table style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; margin: auto; border-collapse: collapse; border-width: 1px; border-color: black; border-style: solid;">
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	Age
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	Montly
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	Cumulative
                        																</td>
                        															</tr>
                        															<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	62
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${sixtwo}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${Csixtwo}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	63
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${sixthree}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${Csixthree}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	64
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${sixfour}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${Csixfour}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	65
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${sixfive}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${Csixfive}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	66
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																    ${sixsix}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${Csixsix}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	67
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${sixseven}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${Csixseven}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	68
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${sixeight}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${Csixeight}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	69
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${sixnine}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${Csixnine}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	70
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${sevenzero}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${Csevenzero}
                        																</td>
                        															</tr>
                        														</table>
                        													</td>
                        												</tr>
                        											</table>
                        										</td>
                        									</tr>
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td class="content-block aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
                        											<a href="#" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;">
                        												DashBoard
                        											</a>
                        										</td>
                        									</tr>
                        								</table>
                        							</td>
                        						</tr>
                        					</table>
                        				</div>
                        			</td>
                        			<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"
                        			 valign="top"></td>
                        		</tr>
                        	</table>
                        </body>
                    </html>`,
        };

        mailgun.messages().send(data, function(error, body) {
            console.log(body);
        });

    }


};
