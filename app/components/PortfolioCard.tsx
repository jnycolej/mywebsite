"use client";

import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useRef } from "react";
import { ProjectCard } from "../lib/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
type PortfolioCardProps = {
  project: ProjectCard;
};

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;
function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`,
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`,
      );
    }
  });

  return maskImage;
}
function StyleSheet() {
  return (
    <style>{`
            #screenshots {
              width: 100vw;
              max-width: 400px;
              position: relative;
            }

            #screenshots #progress {
                position: absolute;
                top: -65px;
                left: -15px;
                transform: rotate(-90deg);
            }

            #screenshots .bg {
                stroke: #0b1011;
            }

            #screenshots #progress circle {
                stroke-dashoffset: 0;
                stroke-width: 10%;
                fill: none;
            }

            #progress .indicator {
                stroke: var(--accent);
            }

            #screenshots ul {
                display: flex;
                list-style: none;
                height: 220px;
                overflow-x: scroll;
                padding: 20px 0;
                flex: 0 0 600px;
                margin: 0 auto;
                gap: 20px;
            }

            #screenshots ::-webkit-scrollbar {
                height: 5px;
                width: 5px;
                background: #fff3;
                -webkit-border-radius: 1ex;
            }

            #screenshots ::-webkit-scrollbar-thumb {
                background: var(--accent);
                -webkit-border-radius: 1ex;
            }

            #screenshots ::-webkit-scrollbar-corner {
                background: #fff3;
            }

            #screenshots li {
                flex: 0 0 200px;
                background: var(--accent);
            }

    `}</style>
  );
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const {
    name,
    category,
    description,
    techStack,
    screenshots,
    github,
    liveDemo,
    caseStudy,
  } = project;

  const ScrollLinked = () => {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
    const maskImage = useScrollOverflowMask(scrollXProgress);

    return (
      <div id="screenshots">
        <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        {screenshots?.length ? (
          <>
            <motion.ul ref={ref} style={{ WebkitMaskImage: maskImage, maskImage }}>
              {screenshots.map((_, idx) => (
                <li key={idx}>
                  <img
                    src={screenshots[idx]}
                    alt={`${name} screenshot`}
                    className=" z-20 w-full object-cover"
                  />
                </li>
              ))}
            </motion.ul>
            <StyleSheet />
          </>
        ) : (
          <p>Coming Soon...</p>
        )}
      </div>
    );
  };
  return (
    <div id={`#${name}`}>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="font-bold p-2 text-2xl">{name}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className=" text-xl font-semibold">Tech Stack</p>
          <ul>
            <li>
              <strong>Frontend:</strong> {techStack.frontend.join(", ")}
            </li>
            <li>
              <strong>Backend:</strong> {techStack.backend.join(", ")}
            </li>
            <li>
              <strong>DevOps & Testing:</strong> {techStack.devOps.join(", ")}
            </li>
          </ul>

          <p className="font-semibold mb-1">Screenshots</p>
          {screenshots?.length ? (
              <Carousel className="">
                <CarouselContent>
                  {screenshots.map((_, idx) => (
                    <CarouselItem key={idx}>
                      <div>
                        <Card>
                          <CardContent>
                            <img
                              src={screenshots[idx]}
                              alt={`${name} screenshot`}
                              className=" z-20 w-full object-cover"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
          ) : (
            <p>Coming Soon...</p>
          )} 
          {/* <ScrollLinked /> */}
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

          <p className="font-semibold text-xl mb-1">Case Study</p>
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
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}
