import nodemailer from 'nodemailer';

//uosy dodi meqo uyni
//amishranjan75@gmail.com

export const sendVerificationEmail = (token, email, name) => {
    const html = `
    <html>
        <body>
            <h3> Dear ${name} </h3>
            <p> Thanks for signing up at Tech Products! </p>
            <p> Use the below link to verify your email </p>
            <a href="http://localhost:3000/email-verify/${token}"> Click here! </a>
        </body>
    </html>
    `;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'amishranjan75@gmail.com',
            pass: 'uosy dodi meqo uyni',
        },
    });

    const mailOptions = {
        from: 'amishranjan75@gmail.com',
        to: email,
        subject: 'Verify your email address',
        html: html,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email send to ${email}`);
            console.log(info.response);
        }
    });
};