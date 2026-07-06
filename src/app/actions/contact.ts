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
    return { status: "success", message: "Thanks! I'll get back to you within 24 hours." };
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
      message: "Please tell me a bit more about your project (at least a sentence).",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Graceful fallback while the Resend key isn't configured yet
    return {
      status: "error",
      message: `The form is temporarily offline — please email me directly at ${site.contact.email} or reach out on WhatsApp.`,
    };
  }

  // Resend's shared onboarding sender works with no domain setup, but in that mode
  // it can ONLY deliver to the email that owns the Resend account. Once granyyte.com
  // is verified in Resend, set RESEND_FROM to e.g. "Granyyte <hello@granyyte.com>".
  const from = process.env.RESEND_FROM || "Granyyte Website <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO || site.contact.email;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
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
      // Surfaces the real reason in server logs (bad key, unverified sender, etc.)
      console.error("[contact] Resend error:", error);
      return {
        status: "error",
        message: `I couldn't send your message (${error.message}). Please email me directly at ${site.contact.email}.`,
      };
    }

    console.log("[contact] sent:", data?.id);
    return { status: "success", message: "Thanks! I'll get back to you within 24 hours." };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email me directly at ${site.contact.email}.`,
    };
  }
}
