
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Contact Message from ${name}`,
            text: `You received a message from ${name} (${email}):\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        return res.status(500).json({ message: "Failed to send message." });
    }
}
