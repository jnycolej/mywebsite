"use client"
import {useState} from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import ProjectSymbol from "./ProjectSymbol";
import { cleanText, featuredProjects } from "../lib/portfolio";

const filters = ["all", "games", "productivity", "entertainment"];

export default function ProjectExplorer() {
    const [filter, setFilter] = useState("all");
    const visible = featuredProjects.filter(
        (project) => filter === "all" || filter === project.category,
    );

    return (
        <>
            <div
                className="project-filters"
                role="group"
                aria-label="Filter projects"
            >
                {filters.map((item) => (
                    <button
                        key={item}
                        aria-pressed={filter === item}
                        onClick={() => setFilter(item)}
                    >
                        {item === "all" ? "All projects" : item}
                    </button>
                ))}
                <span aria-live="polite">
                    {visible.length.toString().padStart(2, "0")} projects
                </span>
            </div>
            <div className="project-list">
                {visible.map((project) => (
                    <article className="project-row" key={project.id} id={project.id}>
                        <div className={`project-visual tone-${project.color}`}>
                            <span className="eyebrow">
                                {project.label} / {project.category}
                            </span>
                            <ProjectSymbol name={project.name} />
                            <span className="visual-caption">{project.title}</span>
                        </div>
                        <div className="project-copy">
                            <span className="eyebrow">Selected work / {project.label}</span>
                            <h2>{project.title}</h2>
                            <p>{cleanText(project.description)}</p>
                            <ul className="tech-tags" aria-label="Technologies">
                                {project.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                            {project.github && (
                                <a
                                    className="text-link"
                                    href={
                                        project.github.startsWith("https://")
                                            ? project.github
                                            : `https://${project.github}`
                                    }
                                >
                                    View source <ArrowUpRight size={20} />
                                </a>
                            )}
                            {project.liveDemo && (
                                <a className="text-link" href={project.liveDemo}>
                                    Live demo <ArrowUpRight size={20} />
                                </a>
                            )}
                            <details className="project-details">
                                <summary>
                                    Behind the build <Plus size={19} />
                                </summary>
                                <div className="details-body">
                                    <h3>The stack</h3>
                                    {Object.entries(project.techStack).map(([area, entries]) => (
                                        <p key={area}>
                                            <strong>
                                                {area === "devOps"
                                                    ? "Tools & workflow"
                                                    : area === "frontend"
                                                        ? "Frontend"
                                                        : "Backend"
                                                }
                                            </strong>
                                            <br />
                                            {entries.join(" . ")}
                                        </p>
                                    ))}
                                    <h3>Challenges & decisions</h3>
                                    {project.caseStudy.map((study) => (
                                        <div className="case-study" key={study.challenge}>
                                            <h4>{cleanText(study.challenge)}</h4>
                                            <p>{cleanText(study.solution)}</p>
                                            {study.whatILearned && (
                                                <p>
                                                    <strong>What I learned:</strong>{" "}
                                                    {cleanText(study.whatILearned)}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>
                    </article>
                ))}
            </div>
        </>
    )
}