"use client";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
export default function ContactForm() {
  const [opened, setOpened] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const message = String(data.get("message")).trim();
    if (!name || !message) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name}\nEmail: ${email}`,
    );
    window.location.href = `mailto:jennifer.n.joseph@gmail.com?subject=${subject}&body=${body}`;
    setOpened(true);
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="contact-name">Name</label>
      <input
        id="contact-name"
        name="name"
        autoComplete="name"
        placeholder="Your name"
        required
        maxLength={120}
      />
      <label htmlFor="contact-email">Email</label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Your email"
        required
        maxLength={200}
      />
      <label htmlFor="contact-message">Message</label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Tell me about your idea, project, or opportunity…"
        required
        rows={6}
        maxLength={4000}
      />
      <p className="form-note">
        This opens a draft in your email app. You can review it before sending.
      </p>
      <button className="action-button" type="submit">
        Create email <ArrowRight size={24} />
      </button>
      {opened && (
        <p role="status" className="form-status">
          Your email app should open with your draft. If it doesn’t, email{" "}
          <a href="mailto:jennifer.n.joseph@gmail.com">
            jennifer.n.joseph@gmail.com
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}
