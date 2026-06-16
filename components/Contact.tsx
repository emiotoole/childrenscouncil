"use client";
import Image from "next/image";

import { useState, FormEvent } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface FieldError {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const SUBJECTS = [
  "Bring the program to my setting",
  "Educator / facilitator training",
  "Research & evidence base",
  "Partnership opportunities",
  "Media & press",
  "General inquiry",
  "Other",
];

function validate(form: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): FieldError {
  const errors: FieldError = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject) errors.subject = "Please select a subject.";
  if (!form.message.trim()) errors.message = "Please enter your message.";
  else if (form.message.trim().length < 20)
    errors.message = "Message must be at least 20 characters.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldError>({});
  const [state, setState] = useState<FormState>("idle");
  const [serverError, setServerError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldError]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setState("loading");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong.");
        setState("error");
      } else {
        setState("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch {
      setServerError("Network error — please try again.");
      setState("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-cream py-24 overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-pink-brand/10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-brand/8 -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6">
        <div className="text-center mb-10 space-y-3">
          <span className="inline-block bg-blue-brand/10 text-blue-brand font-bold text-sm px-4 py-1.5 rounded-full uppercase tracking-wide">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy text-balance">
            Bring the program{" "}
            <span className="text-blue-brand">to your setting.</span>
          </h2>
          <p className="text-navy/65 text-lg leading-relaxed">
            Whether you run a childcare centre, kindergarten, or community
            organisation — we&apos;d love to hear from you.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-xl shadow-navy/8 p-8 sm:p-10">
            {state === "success" ? (
              <div className="text-center space-y-4 py-8">
                <div className="flex justify-center">
                  <Image
                    src="/svgs/buddy-bloom.svg"
                    alt="Success"
                    width={120}
                    height={120}
                    className="animate-bounce-gentle"
                  />
                </div>
                <h3 className="text-2xl font-black text-navy">
                  Message sent!
                </h3>
                <p className="text-navy/65">
                  Thanks for reaching out. We&apos;ll get back to you within
                  1–2 business days.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-4 text-blue-brand font-bold underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="text-xl font-black text-navy mb-6">
                  Send us a message
                </h3>

                {serverError && (
                  <div className="bg-coral/10 border border-coral/30 text-coral rounded-xl px-4 py-3 text-sm font-semibold">
                    {serverError}
                  </div>
                )}

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-navy mb-1.5"
                    >
                      Your name <span className="text-coral">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full rounded-xl border-2 px-4 py-2.5 text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-blue-brand/30 transition ${
                        errors.name
                          ? "border-coral"
                          : "border-navy/15 focus:border-blue-brand"
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-coral font-semibold">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-navy mb-1.5"
                    >
                      Email address <span className="text-coral">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full rounded-xl border-2 px-4 py-2.5 text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-blue-brand/30 transition ${
                        errors.email
                          ? "border-coral"
                          : "border-navy/15 focus:border-blue-brand"
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-coral font-semibold">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-navy mb-1.5"
                  >
                    Subject <span className="text-coral">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={`w-full rounded-xl border-2 px-4 py-2.5 text-navy bg-white focus:outline-none focus:ring-2 focus:ring-blue-brand/30 transition ${
                      errors.subject
                        ? "border-coral"
                        : "border-navy/15 focus:border-blue-brand"
                    } ${!form.subject ? "text-navy/40" : "text-navy"}`}
                  >
                    <option value="" disabled>
                      Select a topic…
                    </option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-coral font-semibold">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-navy mb-1.5"
                  >
                    Message <span className="text-coral">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help…"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full rounded-xl border-2 px-4 py-2.5 text-navy placeholder:text-navy/30 resize-none focus:outline-none focus:ring-2 focus:ring-blue-brand/30 transition ${
                      errors.message
                        ? "border-coral"
                        : "border-navy/15 focus:border-blue-brand"
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-coral font-semibold">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full bg-navy text-cream font-bold text-lg py-3.5 rounded-xl hover:bg-blue-brand transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {state === "loading" ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray="40"
                          strokeDashoffset="20"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
      </div>
    </section>
  );
}
