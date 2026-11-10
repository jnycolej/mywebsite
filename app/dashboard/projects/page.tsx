import Image from "next/image";
import type {Metadata} from "next";
import ProjectExplorer from "@/app/components/ProjectExplorer";

export const metadata: Metadata = {title: "Projects"};

export default function ProjectsPage() {
  return (
    <>
      <div className="page-heading heading-green">
        <h1>Projects</h1>
        <p>
          Real applications.
          <br />
          Full-stack builds.
          <br />
          Experiments in problem-solving.
        </p>
      </div>
      <ProjectExplorer />
    </>
  )
}