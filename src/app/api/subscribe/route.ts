import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  try {
    const { error } = await resend.emails.send({
      from: "Cheralds <onboarding@resend.dev>",
      to: "stadnyk.andy@gmail.com",
      subject: 'New "Cheralds" subscriber',
      html: `Subscriber's email: <strong>${email}</strong>`,
    });
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json({
      message: "Email send successfully",
    });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}

// import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

// const transporter = nodemailer.createTransport({
//   service: "zoho",
//   host: "smtpro.zoho.in",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.NEXT_PUBLIC_EMAIL,
//     pass: process.env.NEXT_PUBLIC_PASSWORD,
//   },
// });

// export async function POST(req: NextRequest) {
//   const { email } = await req.json();

//   const mailOption: Mail.Options = {
//     from: `Cheralds <${process.env.NEXT_PUBLIC_EMAIL}>`,
//     to: "stadnyk.andy@gmail.com",
//     subject: "Subject text",
//     html: `<h1>${email}...?</h1>`,
//     text: "Text text",
//   };

//   const sendMailPromise = () =>
//     new Promise<string>((resolve, reject) => {
//       transporter.sendMail(mailOption, function (err) {
//         console.log({ err });

//         if (!err) {
//           resolve("Email sent successfully");
//         } else {
//           reject(err.message);
//         }
//       });
//     });

//   try {
//     await sendMailPromise();
//     await transporter.sendMail(mailOption);

//     return Response.json("data");
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
