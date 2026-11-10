import { BookOpen, MapPin, CircleDot } from "lucide-react";

export default function ProjectSymbol({ name }: { name: string }) {
    const Icon = 
        name === "BookKeeper"
            ? BookOpen
            : name === "SpotRoulette"
                ? MapPin
                : CircleDot;
    
    return <Icon className="project-symbol" strokeWidth={1} aria-hidden="true" />;
}