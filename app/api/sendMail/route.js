import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Directly access the data fields sent from the frontend
    const { contact, plan, totals, additionalRoles, additionalExecutiveRoles,  quote } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // user: process.env.EMAIL_USER,
        // pass: process.env.EMAIL_PASS,
        user: "rsnowden21@gmail.com",
        pass: "aadfvqhsfkfflkbx",
      }
    });

    const mailOption = {
      from: contact.email,
      to: "rsnowden@fletcherchase.com",
      subject: `Quote for ${plan} from ${contact.name}`,
      html: `
        <h1 style="text-align: center; margin: 20px 0;">Quote for ${plan}: € ${quote}/month </h1>
        <h2 style="text-align: center; margin-top: 10px;">User details</h2>
        <table style="width: 100%; max-width: 600px; margin: 10px auto 20px auto; border-collapse: collapse; background-color: #fff; font-family: Arial, sans-serif; border: 1px solid #ddd; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="padding: 10px; border-bottom: 1px solid #ddd; text-align: left;">User Info</th>
              <th style="padding: 10px; border-bottom: 1px solid #ddd; text-align: left;">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">Company Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact.companyName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact.phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">Message</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact.message}</td>
            </tr>
          </tbody>
        </table>
        <h2 style="text-align: center; margin-top: 10px;">Plan details</h2>
        <table style="width: 100%; max-width: 600px; margin: 10px auto; border-collapse: collapse; background-color: #fff; font-family: Arial, sans-serif; border: 1px solid #ddd; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="padding: 10px; border-bottom: 1px solid #ddd; text-align: left;">Plan Info</th>
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
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">Additional Executive Roles</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${additionalExecutiveRoles}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">Quote</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">€ ${quote}/month</td>
            </tr>
          </tbody>
        </table>
        <h2 style="text-align: center; margin-top: 10px;">Quote Breakdown</h2>
        <div style="width: 100%; max-width: 600px; margin: 10px auto;">
          ${totals.map(item => `
            <p style="font-size: 14px; color: #4a4a4a;">
              <span style="font-weight: normal;">${item.label}:</span> 
              <span style="font-weight: 500; color: #000;">€ ${item.value.toFixed(2)}</span>
            </p>
          `).join('')}
        </div>
      `,
    };

    await transporter.sendMail(mailOption);
    return NextResponse.json({ success: true, message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to Send Email" }, { status: 500 });
  }
}
