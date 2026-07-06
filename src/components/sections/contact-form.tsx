"use client";

import { useActionState } from "react";
import { Send, LoaderCircle, CircleCheck, CircleAlert } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle", message: "" };

const budgets = ["Under $500", "$500 – $1.5k", "$1.5k – $4k", "$5k+", "Not sure yet"];

const inputClasses =
  "w-full rounded-xl border border-edge bg-surface px-4 py-3 text-sm text-fg placeholder:text-faint outline-none transition-colors focus:border-lime/60";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-lime/30 bg-surface p-10 text-center">
        <CircleCheck className="size-12 text-lime" />
        <h3 className="mt-5 font-display text-2xl font-bold text-fg">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot field — hidden from humans */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-mono text-xs text-muted">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-mono text-xs text-muted">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block font-mono text-xs text-muted">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Optional"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block font-mono text-xs text-muted">
            Budget range
          </label>
          <select id="budget" name="budget" defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-xs text-muted">
          Project details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you building? Platforms, timeline, anything that helps me understand."
          className={`${inputClasses} resize-y`}
        />
      </div>

      {state.status === "error" && (
        <p className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">
          <CircleAlert className="mt-0.5 size-4 shrink-0" />
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-base font-medium text-ink transition-all duration-300 hover:bg-lime-dim hover:shadow-[0_0_36px_rgb(200_243_29/0.4)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? (
          <>
            Sending <LoaderCircle className="size-4 animate-spin" />
          </>
        ) : (
          <>
            Send message
            <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
