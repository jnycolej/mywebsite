import { poppins, barlow } from "@/app/ui/fonts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";

import VerticalEventTimeline from "@/app/ui/dashboard/about/verticaleventtimeline";
import Image from "next/image";

const skills = [
  {
    name: "Java",
    description: "",
    image: "/java-logo.svg",
  },
  {
    name: "C",
    description: "",
    image: "https://cdn.simpleicons.org/c",
  },
  {
    name: "Python",
    description: "",
    image: "https://cdn.simpleicons.org/python",
  },
  {
    name: "SQL",
    description: "",
    image: "https://cdn.simpleicons.org/mysql",
  },
  {
    name: "HTML",
    description: "",
    image: "https://cdn.simpleicons.org/html5",
  },
  {
    name: "JavaScript",
    description: "",
    image: "https://cdn.simpleicons.org/javascript"
  },
  {
    name: "React",
    description: "",
    image: "https://cdn.simpleicons.org/react" 
  },
  {
    name: "Node.js",
    description: "",
    image: "https://cdn.simpleicons.org/nodedotjs"
  },
  {
    name: "Docker",
    description: "",
    image: "https://cdn.simpleicons.org/docker"
  },
  {
    name: "Jenkins",
    description: "",
    image: "https://cdn.simpleicons.org/jenkins"
  },
  {
    name: "TailwindCSS",
    description: "",
    image: "https://cdn.simpleicons.org/tailwindcss"
  },
  {
    name: "React Native",
    description: "",
    image: "https://cdn.simpleicons.org/react"
  },
  {
    name: "MongoDB",
    description: "",
    image: "https://cdn.simpleicons.org/mongodb",
  },
  {
    name: "Version Control (Git)",
    description: "",
    image: "https://cdn.simpleicons.org/git"
  },
  {
    name: "Auth0",
    description: "",
    image: "https://cdn.simpleicons.org/auth0"
  }
];

export default function Page() {
  return (
    <div>
      <div>
        <h1 className="text-5xl mb-4 text-center">About me</h1>
        <hr />
        <p className="text-base poiret-one-regular">
          &emsp;{" "}
          <strong>
            My path to software development began with a love for building.{" "}
          </strong>
          From Legos to simulation games, I was always more interested in
          designing systems and environments than simply using them. That
          curiosity led me to initially study architecture, where I learned to
          think abstractly and solve problems creatively. <br />
          <br />
          &emsp; <strong>I soon realized,</strong> however, that I wanted fewer
          constraints and more freedom to build. So, I transitioned into
          computer science. What started as an interest in game development
          evolved into a deeper passion for software design, particularly on the
          backend. I enjoy identifying problems, designing scalable solutions,
          and bringing ideas to life through clean, intentional code. <br />{" "}
          <br />
          &emsp; <strong>Today,</strong> I approach software development as both
          a craft and a creative process, continuously refining my skills
          through hands-on projects and real-world problem solving.
        </p>
      </div>
      <div className="pt-5" id="skills">
        <p className="text-2xl text-center p-2 font-bold">Skills and Technologies</p>

        <div className="flex w-full max-w-xl flex-col gap-6">
          <ItemGroup className="grid grid-cols-3 gap-4">
            {skills.map((skill) => (
              <Item key={skill.name} variant="outline">
                <ItemHeader>
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={100}
                    height={100}
                    className="aspect-square w-full rounded-sm object-cover"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>{skill.name}</ItemTitle>
                  <ItemDescription>{skill.description}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </div>
      </div>
      <VerticalEventTimeline />
    </div>
  );
}
