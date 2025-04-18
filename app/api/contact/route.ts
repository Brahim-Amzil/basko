import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectDescription, budget } = body;

    // Validate form data
    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Creating transporter with:', {
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
      }
    });

    // Try a different approach with TLS options
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // true for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        // Do not fail on invalid certificates
        rejectUnauthorized: false
      },
      debug: true, // Show debug output
      logger: true // Log information into the console
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Description:</strong> ${projectDescription}</p>
        ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
        <hr />
        <p>This email was sent from the contact form on your website.</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Project Description: ${projectDescription}
        ${budget ? `Budget: ${budget}` : ''}
        
        This email was sent from the contact form on your website.
      `
    };

    console.log('Sending email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
    });

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email', 
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined 
      },
      { status: 500 }
    );
  }
}