//About us types
export type TimelineEvent = {
  title: string;
  isChecked?: boolean;
};

export type TimelinePeriod = {
  year: number;
  periodType?: "Q" | "H";
  periodNumber?: number;
  heading?: string;
  isChecked?: boolean;
  events: TimelineEvent[];
};

export type Events = TimelinePeriod[];


//Project page types
export type ProjectListObject = {
    challenge: string,
    solution: string,
    whatILearned?: string;
}

export type ProjectCard = {
    name: string;
    category: string;
    description: string;
    techStack: {
        frontend: string[],
        backend: string[],
        devOps: string[]
    },
    screenshots?: string[],
    github?: string,
    liveDemo?: string,
    caseStudy: ProjectListObject[];

}

export type ProjectCards = ProjectCard[];