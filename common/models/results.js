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
                        			<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top">
                        			 </td>
                        			<td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;"
                        			 valign="top">
                        				<div style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                        					<table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;"
                        					 bgcolor="#fff">
                        						<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        							<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; "
                        							 align="center" valign="top">
                        								<table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; background-color: #2589BD">
                        										<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                        										 valign="top">
                        											<h1 style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 32px; color: #fff; line-height: 1.2em; font-weight: 500; text-align: center; margin: 40px 0 0;" align="center">
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
                        																	$${sixtwo}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	63
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${sixthree}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	64
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																    $${sixfour}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	65
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${sixfive}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	66
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																$${sixsix}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	67
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${sixseven}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	68
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${sixeight}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	69
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																$${sixnine}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	70
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																$${sevenzero}
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
                        											<a href="#" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; background-color: #2589BD; margin: 0; border-color: #2589BD; border-style: solid; border-width: 10px 20px;">
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
                        							<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0;"
                        							 align="center" valign="top">
                        								<table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; background-color: #2589BD">
                        										<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                        										 valign="top">
                        											<h1 style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 32px; color: #fff; line-height: 1.2em; font-weight: 500; text-align: center; margin: 40px 0 0;"
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
                        																	$${sixtwo}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${Csixtwo}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	63
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${sixthree}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${Csixthree}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	64
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${sixfour}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${Csixfour}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	65
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${sixfive}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${Csixfive}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	66
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																    $${sixsix}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${Csixsix}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	67
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${sixseven}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${Csixseven}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	68
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${sixeight}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${Csixeight}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	69
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${sixnine}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${Csixnine}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	70
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$${sevenzero}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	$vvv${Csevenzero}
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
                        											<a href="#" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; background-color: #2589BD; margin: 0; border-color: #2589BD; border-style: solid; border-width: 10px 20px;">
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



    //create http interaction

    Results.remoteMethod("benefitData", {
        http: {
            path: "/benefitData",
            verb: "GET"
        },

        //set local input / method parameters

        accepts: [{
            arg: "pia",
            required: true,
            type: "number",
            description: "SS Benefit at full retirement age"
    }, {
            arg: "gender",
            required: true,
            type: "string",
            description: "m or f"
    }, {
            arg: "dob",
            required: true,
            type: "string",
            description: "Month and Year of birth (MM-YYYY)"
    }],

        //descriptions for loopback explorer

        notes: ["This api will return estimates for Social Security benefits over a range of ages."],
        description: "Calculates benefit estimates.",
        returns: {
            type: 'object',
            root: true
        }
    });

    //method to calculate data and return benefitData object

    Results.benefitData = function(pia, gender, dob, callback) {

        //initalize all variables

        let fullRetAge = "";

        let lifeExpect = "";

        let benefit = "";

        let cumBenefit = "";

        let retirementYears = [62, 63, 64, 65, 66, 67, 68, 69, 70];

        let discountRate = 3.5;

        let monthlyArray = [];

        let cumulativeArray = [];

        let pvOfBenefit = [];

        let tableData = [];

        let FRAbenefitAmount = "";

        let benefitData = "";

        //set average life expectancy based on gender
        // Use a ternary here ie: let foo = condition ? true value : false value
        if (gender === "m") {
            //male life expectancy = 83 years = 996 months
            lifeExpect = 996;
        }
        else {
            //female life expectancy = 85.6 years = 1027 months
            lifeExpect = 1027;
        }

        //Manipulate user input to extract year of birth

        let dateString = dob;
        let yearString = dateString.substr(0, 4);
        let dobYear = Number(yearString);

        //Logic to determine full retirement age.  All fulRetAge values in months.

        if (dobYear <= 1937) {
            fullRetAge = 780;
        }
        else if (dobYear > 1937 && dobYear < 1943) {
            fullRetAge = 780 + ((dobYear - 1937) * 2);
        }
        else if (dobYear >= 1943 && dobYear < 1955) {
            fullRetAge = 792;
        }
        else if (dobYear >= 1955 && dobYear < 1960) {
            fullRetAge = 792 + ((dobYear - 1954) * 2);
        }
        else {
            fullRetAge = 804;
        }

        //logic to calculate array of benefit amounts 

        for (let targetAge = 744; targetAge <= 840; targetAge += 12) {
            if (targetAge <= fullRetAge) {
                let monthDelta = fullRetAge - targetAge;
                // Create a function maybe for the calutation and again use a ternary.
                if (monthDelta <= 36) {
                    benefit = Math.round((1 - (monthDelta * (5 / 9) * 0.01)) * pia);
                }
                else {
                    //0.2 = reduction for first 36 months
                    benefit = Math.round((1 - (((monthDelta - 36) * (5 / 12) * 0.01) + 0.2)) * pia);
                }
            }
            else {
                let monthDelta = targetAge - fullRetAge;
                let monthlyCredit = 0.08 / 12;
                let creditFactor = 1 + (monthDelta * monthlyCredit);
                benefit = Math.round(pia * creditFactor);
            }

            //calculate cumulative total benefit based on life expectancy

            cumBenefit = benefit * (lifeExpect - targetAge);

            //push benefit numbers into separate arrays for use in charts

            monthlyArray.push(benefit);
            cumulativeArray.push(cumBenefit);
        }

        // logic to calculate present value of benefits per retirement age. Discount rate is assumed at 3.5%

        let r_monthly = (discountRate / 12) / 100;

        for (let i = 0; i < retirementYears.length; i++) {
            let n = (lifeExpect / 12 - retirementYears[i]) * 12;
            pvOfBenefit.push(Math.round((monthlyArray[i]) * ((1 - Math.pow((1 + r_monthly), (-n))) / r_monthly)));
        }

        // function pedroTest( someInputArray, yearsToLive ){
        //     return someInputArray.map( (year, index) =>{
        //         let n  = (yearsToLive / 12 - year) * 12;    
        //         return Math.round((monthlyArray[index]) * ((1 - Math.pow((1 + r_monthly), (-n))) / r_monthly));
        //     })
        // }

        benefitData = {
            retYears: retirementYears,
            monthly: monthlyArray,
            cumulative: cumulativeArray,
            pv: pvOfBenefit,
            lifeExpectancy: lifeExpect,
            FRA: fullRetAge
        }

        callback(null, benefitData);

    }
};
