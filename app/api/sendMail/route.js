import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Directly access the data fields sent from the frontend
    const { contact, plan, additionalRoles, quote } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    const mailOption = {
      // from: process.env.EMAIL_USER,
      // to: "amdad.zatiq@gmail.com",  
      from: contact.email,
      // to: process.env.EMAIL_TO,
      to: "amdad.zatiq@gmail.com",
      subject: `Quote for ${plan} from ${contact.name}`,
      html: `
<h1 style="text-align: center; margin: 20px 0;">Quote for ${plan}</h1>
<table style="width: 100%; max-width: 600px; margin: 20px auto; border-collapse: collapse; background-color: #fff; font-family: Arial, sans-serif; border: 1px solid #ddd; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
  <thead>
    <tr style="background-color: #f5f5f5;">
      <th style="padding: 10px; border-bottom: 1px solid #ddd; text-align: left;">Description</th>
      <th style="padding: 10px; border-bottom: 1px solid #ddd; text-align: left;">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">Package</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">${plan}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">Additional Roles</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">${additionalRoles}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">Quote</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">€ ${quote}/month</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">Message</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact.message}</td>
    </tr>
  </tbody>
</table>
      `,
    };

    await transporter.sendMail(mailOption);
    return NextResponse.json({ success: true, message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to Send Email" }, { status: 500 });
  }
}