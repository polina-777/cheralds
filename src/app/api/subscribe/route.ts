import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const email = data.email;

  try {
    const transporter = nodemailer.createTransport({
      service: "google",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    const mailOption = {
      from: `Cheralds <${process.env.NEXT_PUBLIC_EMAIL}>`,
      to: "stadnyk.andy@gmail.com",
      subject: "Hello New Email",
      text: "Hello world?",
      html: `<h1>${email}...?</h1>`,
    };

    const info = await transporter.sendMail(mailOption);

    return NextResponse.json({ info, email });
  } catch (err) {
    return NextResponse.json({ mesage: "error" }, { status: 500 });
  }
}
