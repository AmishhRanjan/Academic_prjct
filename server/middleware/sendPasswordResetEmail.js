import nodemailer from 'nodemailer';

export const sendPasswordResetEmail = (token, email, name) => {
    const html = `
    <html>
        <body>
            <h3> Dear ${name} </h3>
            <p> Please click on the link below to reset your password.</p>
            <a href="http://localhost:3000/password-reset/${token}">Click here!</a>
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
        subject: 'Tech Products: Reset your password request.',
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