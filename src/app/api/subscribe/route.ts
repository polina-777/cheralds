import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const email = data.email;

  try {
    const transporter = nodemailer.createTransport({
      service: "google",
      auth: {
        user: "stadnyk@gmail.com",
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    const mailOption = {
      from: "stadnyk@gmail.com",
      to: "stadnyk.andy@gmail.com",
      subject: "New Email",
      html: `<h1>${email}</h1>`,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ email });
  } catch (err) {
    return NextResponse.json({ mesage: "error" }, { status: 500 });
  }
}
