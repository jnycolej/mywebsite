import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Code2, Box, BookOpen, CircleDot } from "lucide-react";
import ArchitecturalArt from "@/app/components/ArchitecturalArt";
import { events } from "@/app/lib/timelineData";
export const metadata: Metadata = { title: "About" };
const skillGroups = [
  {
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Applications",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "Express",
      "Tailwind CSS",
    ],
  },
  {
    title: "Data & delivery",
    skills: [
      "MongoDB",
      "Auth0",
      "Socket.IO",
      "Docker",
      "Jenkins",
      "Git & GitHub",
    ],
  },
];
export default function AboutPage() {
  return (
    <>
      <div className="page-heading heading-red">
        <h1>About</h1>
        <p>
          My story.
          <br />
          My path.
          <br />
          And what drives me.
        </p>
      </div>
      <section className="about-intro">
        <ArchitecturalArt compact />
        <div>
          <span className="eyebrow">Built on curiosity</span>
          <h2>
            From architecture
            <br />
            to computer science.
          </h2>
          <p>
            My path to software development began with a love for building. From
            Legos to simulation games, I was always more interested in designing
            systems and environments than simply using them.
          </p>
          <p>
            That curiosity led me to architecture, where I learned to think
            abstractly and solve problems creatively. I eventually found a new
            medium in computer science: a way to build, iterate, and bring ideas
            to life through code.
          </p>
          <p>
            Today, I’m especially drawn to backend development—the logic, data,
            and systems that make an application work. I bring that same care to
            the full experience.
          </p>
          <a className="text-link" href="/JenniferJosephResume2026.pdf">
            View my résumé <ArrowUpRight size={22} />
          </a>
        </div>
      </section>
      <section className="about-now">
        <h2 className="eyebrow">Now</h2>
        <p>
          I’m a software engineer with a B.S. in Computer Science from the
          University of New Orleans, building full-stack projects and continuing
          to learn through hands-on problem solving.
        </p>
      </section>
      <section className="interests">
        <h2 className="eyebrow">
          A few things
          <br />I love
        </h2>
        {[
          { label: "Coding", icon: Code2 },
          { label: "Design", icon: Box },
          { label: "Reading", icon: BookOpen },
          { label: "Sports", icon: CircleDot },
        ].map(({ label, icon: Icon }) => (
          <div key={label}>
            <Icon strokeWidth={1.25} />
            <span>{label}</span>
          </div>
        ))}
      </section>
      <section className="skills-section" id="skills">
        <div className="section-label">
          <h2>Tools of the trade</h2>
          <span>Always learning</span>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="journey">
        <div className="section-label">
          <h2>The path here</h2>
          <span>Architecture → software</span>
        </div>
        <details>
          <summary>
            Explore my education & project timeline{" "}
            <span aria-hidden="true">+</span>
          </summary>
          <ol>
            {events.map((event, index) => (
              <li key={`${event.year}-${index}`}>
                <span>{event.year}</span>
                <div>
                  <h3>{event.heading}</h3>
                  {event.events.length > 0 && (
                    <ul>
                      {event.events.map((detail) => (
                        <li key={detail.title}>{detail.title}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </details>
      </section>
      <div className="home-contact">
        <p>Curious about what I’m building?</p>
        <Link href="/dashboard/projects">
          Explore the work. <ArrowUpRight />
        </Link>
      </div>
    </>
  );
}
