import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ArchitecturalArt from "./components/ArchitecturalArt";
import ProjectSymbol from "./components/ProjectSymbol";
import {featuredProjects} from "./lib/portfolio";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-heading">
          <h1 id="hero-title">
            Jennifer <br /> Joseph
          </h1>
          <p className="hero-role">
            Software engineer / <br />
            Full-Stack developer
          </p>
        </div>
        <div className="hero-bottom">
          <div className="hero-intro">
            <span className="eyebrow">A builder at heart</span>
            <p>
              I build thoughtful, full-stack applications that solve real problems and create engaging experiences.
            </p>
            <Link className="action-button" href="/dashboard/projects">
              View my work <ArrowRight size={24} />
            </Link>
            <span className="hero-coordinate">
              CREATIVE THINKING. INTENTIONAL CODE.
            </span>
          </div>
          <ArchitecturalArt />
        </div>
      </section>
      <section className="featured" aria-labelledby="featured-title">
        <div className="section-label">
          <h2 id="featured-title">Featured projects</h2>
          <span>03 selected works</span>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <Link
              className={`feature-card tone-${project.color}`}
              key={project.id}
              href={`/dashboard/projects#${project.id}`}
            >
              <span className="eyebrow">
                {project.label} / {project.category}
              </span>
              <ProjectSymbol name={project.name} />
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ArrowUpRight className="card-arrow" size={28} />
              <span className="sr-only">Explore {project.title}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="manifesto">
        <span className="manifesto-shape" aria-hidden="true" />
        <div>
          <span className="eyebrow">A different perspective</span>
          <h2>
            Architecture
            <br /> shaped how I <br />
            see problems<span>-</span>
          </h2>
        </div>
        <div className="manifesto-note">
          <p>Now I solve them <br /> with code.</p>
          <Link className="text-link" href="/dashboard/about">
            The story so far <ArrowUpRight size={22} />
          </Link>
        </div>
      </section>
      <section className="home-contact">
        <p>Have something in mind?</p>
        <Link href="/dashboard/contact">
          Let's build it. <ArrowUpRight />
        </Link>
      </section>
    </>
  )
}