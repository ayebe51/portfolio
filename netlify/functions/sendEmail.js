export const handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { name, email, message } = JSON.parse(event.body);

    // STUB: Validasi basic
    if (!name || !email || !message) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "All fields are required" }),
        };
    }

    // STUB: Simulation sending email (replace with SendGrid/Mailgun logic)
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: process.env.EMAIL_TO,
      from: 'noreply@yourdomain.com',
      subject: `New Portfolio Message from ${name}`,
      text: message,
      html: `<strong>From:</strong> ${email}<br><p>${message}</p>`,
    };
    await sgMail.send(msg);
    */

    console.log(`Received message from ${name} (${email}): ${message}`);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Message sent successfully!" }),
    };
};
