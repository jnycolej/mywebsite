import { ProjectCard } from "../lib/types";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type PortfolioCardProps = {
    project: ProjectCard;
};

export default function PortfolioCard({project}: PortfolioCardProps) {
    const { name, description, techStack, screenshots, github, liveDemo, caseStudy} = project;
    
    return (
        <div id={`#${name}`}>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                                <p className="fw-semibold">Tech Stack</p>
            <ul>
                <li><strong>Frontend:</strong> {techStack.frontend.join(", ")}</li>
                <li><strong>Backend:</strong> {techStack.backend.join(", ")}</li>
                <li><strong>DevOps & Testing:</strong> {techStack.devOps.join(", ")}</li>
            </ul>

            <p className="fw-semibold mb-1">Screenshots</p>
            {screenshots?.length ? (
                <ul>
                    {screenshots.map((src) => (
                        <li key={src}>{src}</li>
                    ))}
                </ul>
            ) : (
                <p>Coming Soon...</p>
            )}

            {github && (
                <p>
                    <strong>Github Repo:</strong>{" "}
                    <a href={github} target="_blank" rel="noreferrer">
                        {github}
                    </a>
                </p>
            )}

            <p>
                <strong>Live Demo Link:</strong>{" "}
                {liveDemo ? (
                    <a href={liveDemo} target="_blank" rel="noreferrer">
                        {liveDemo}
                    </a>
                ) : (
                    "Coming Soon"
                )}
            </p>

            <p className="fw-semibold mb-1">Case Study</p>
            <ul>
                {caseStudy.map((item, idx) => (
                    <li key={`${name}-case-${idx}`} className="mb-3">
                        <strong>Challenge {idx + 1}:</strong> {item.challenge}
                        <br />
                        <strong>Solution:</strong> {item.solution}
                        {item.whatILearned && (
                            <>
                                <br />
                                <strong>What I Learned:</strong> {item.whatILearned}
                            </>
                        )}
                    </li>
                ))}
            </ul>
                </CardContent>
            </Card>
        </div>
    );
}

function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}