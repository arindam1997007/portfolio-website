"use server"

import { Resend } from "resend"
import { ContactFormEmail } from "../components/Email/contactFormEmail"
import React from "react"
const resend = new Resend(process.env.RESND_API_KEY)

export const sendEmail = async (formData: FormData) => {
	const name = formData.get("name") as string
	const email = formData.get("email")
	const message = formData.get("message") as string

	if (!email || typeof email !== "string") return { error: "Invalid Email!" }

	const messageLines = message.split(/\r\n|\n/)

	const { data, error } = await resend.emails.send({
		from: "Resend ContactForm <onboarding@resend.dev>",
		to: "arindam.webdeveloper@gmail.com",
		subject: `Portfolio - Contact | ${name}`,
		reply_to: email,
		react: React.createElement(ContactFormEmail, {
			name: name,
			messageLines: messageLines,
			email: email,
		}),
	})

	if (error) console.error(error)

	return { data, error }
}
