"use server";

import { Resend } from "resend";
import { site } from "@/config/site";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Honeypot — bots fill every field; humans never see this one
  if (formData.get("website")) {
    return { status: "success", message: "Thanks! We'll get back to you within 24 hours." };
  }

  if (!name || name.length < 2) {
    return { status: "error", message: "Please enter your name." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (!message || message.length < 10) {
    return {
      status: "error",
      message: "Please tell us a bit more about your project (at least a sentence).",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Graceful fallback while the Resend key isn't configured yet
    return {
      status: "error",
      message: `Our form is temporarily offline — please email us directly at ${site.contact.email} or reach out on WhatsApp.`,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      // Resend's shared onboarding sender works without domain setup;
      // TODO: switch to noreply@granyyte.com after verifying the domain in Resend
      from: "Granyyte Website <onboarding@resend.dev>",
      to: [site.contact.email],
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company && `Company: ${company}`,
        budget && `Budget: ${budget}`,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      throw new Error(error.message);
    }

    return { status: "success", message: "Thanks! We'll get back to you within 24 hours." };
  } catch {
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email us directly at ${site.contact.email}.`,
    };
  }
}
