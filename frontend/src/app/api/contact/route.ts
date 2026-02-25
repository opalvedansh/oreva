import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, service, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"Oréva Contact Form" <${process.env.GMAIL_USER}>`,
            to: "oreva3685@gmail.com",
            replyTo: email,
            subject: `New Inquiry from ${name} — ${service || "General"}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FEFCF8; padding: 40px; border-radius: 12px; border: 1px solid #e5e7eb;">
                    <h1 style="font-size: 28px; font-weight: 900; color: #111827; margin: 0 0 8px;">New Inquiry</h1>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0 0 32px; text-transform: uppercase; letter-spacing: 0.1em;">Oréva Contact Form</p>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 16px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.1em; width: 130px;">Name</td>
                            <td style="padding: 16px 0; border-bottom: 1px solid #f3f4f6; font-size: 16px; font-weight: 600; color: #111827;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 16px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
                            <td style="padding: 16px 0; border-bottom: 1px solid #f3f4f6; font-size: 16px; font-weight: 600; color: #111827;"><a href="mailto:${email}" style="color: #B6E87A; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 16px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.1em;">Service</td>
                            <td style="padding: 16px 0; border-bottom: 1px solid #f3f4f6; font-size: 16px; font-weight: 600; color: #111827;">${service || "Not specified"}</td>
                        </tr>
                        <tr>
                            <td style="padding: 16px 0; font-size: 12px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Message</td>
                            <td style="padding: 16px 0; font-size: 16px; color: #374151; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 32px; padding: 16px; background: #111827; border-radius: 8px;">
                        <p style="margin: 0; font-size: 12px; color: #9ca3af;">Reply directly to this email to respond to ${name}.</p>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ message: "Inquiry sent successfully." }, { status: 200 });
    } catch (err: unknown) {
        console.error("Contact form error:", err);
        return NextResponse.json({ message: "Failed to send email. Please try again." }, { status: 500 });
    }
}
