import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import ArchitecturalArt from "@/app/components/ArchitecturalArt";
import ContactForm from "@/app/components/ContactForm";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() {
  return (
    <>
      <div className="page-heading">
        <h1>Contact</h1>
        <p>
          Let’s build
          <br />
          something
          <br />
          great together.
        </p>
      </div>
      <section className="contact-grid">
        <div className="contact-art">
          <ArchitecturalArt compact />
          <h2>
            Good things start
            <br />
            with a conversation.
          </h2>
          <p>
            Have a role, a project, or an idea in mind? I’d love to hear about
            it.
          </p>
        </div>
        <ContactForm />
      </section>
      <div className="contact-links">
        <a href="mailto:jennifer.n.joseph@gmail.com">
          jennifer.n.joseph@gmail.com <ArrowUpRight size={18} />
        </a>
        <a href="https://github.com/jnycolej">
          GitHub <ArrowUpRight size={18} />
        </a>
        <a href="https://www.linkedin.com/in/jennifer-joseph-18006356">
          LinkedIn <ArrowUpRight size={18} />
        </a>
        <a href="/JenniferJosephResumeOct2026v2.pdf">
          Résumé <ArrowUpRight size={18} />
        </a>
      </div>
    </>
  );
}
