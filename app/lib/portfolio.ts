import { projectcards } from "./projectCardData";

export const cleanText = (text: string) =>
    text
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/<br\s*\/?>/gi, "")
        .trim();

export const projectId = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const presentation = [
    {
        name: "SportsShuffle",
        title: "Sports Shuffle",
        color: "blue",
        label: "01",
        summary: "Real-time multiplayer games, sports trivia, and a little friendly competition.",
        tags: ["React", "Node.js", "Socket.IO"],
    },
    {
        name: "BookKeeper",
        title: "BookKeeper",
        color: "amber",
        label: "02",
        summary: "A personal library, thoughtfully organized. Track books and find your next read.",
        tags: ["React", "Express", "MongoDB", "Auth0"],
    },
    {
        name: "SpotRoulette",
        title: "SpotRoulette",
        color: "green",
        label: "03",
        summary: "Less deciding. More discovering. A place picker for your next local adventure.",
        tags: ["TypeScript", "React", "Express"],
    },
] as const;

export const featuredProjects = presentation.map((display) => {
    const project = projectcards.find((item) => item.name === display.name);
    if (!project) throw new Error(`Missing project data: ${display.name}`);
    return {...project, ...display, id: projectId(project.name)};
});