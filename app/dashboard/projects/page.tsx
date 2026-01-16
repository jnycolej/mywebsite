// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Link from "next/link";
// // import { carouselItemData } from '../lib/carouselItemData';
// import PortfolioCard from "../../components/PortfolioCard";
// import { projectcards, projectIntroCardItems } from "@/app/lib/projectCardData";

// const slugify = (value: string) =>
//   value
//     .toLowerCase()
//     .trim()
//     .replace(/['"]/g, "")
//     .replace(/\s+/g, "-")
//     .replace(/[^a-z0-9-]/g, "");

// export default function Page() {
//   return (
//     <div>
//       <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
//         Projects
//       </h1>

//       <div className="flex overflow-x-auto min-[475px]:justify-center">
//         <div
//           role="tablist"
//           aria-orientation="horizontal"
//           data-slot="tabs-list"
//           className="bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]"
//           tabIndex={-1}
//           data-orientation="horizontal"
//           // style="outline: none"
//         >
//           <button
//             type="button"
//             role="tab"
//             aria-selected="true"
//             aria-controls="radix-_R_inpfiv5ubsnpnb_-content-all-projects"
//             data-state="active"
//             id="radix-_R_inpfiv5ubsnpnb_-trigger-all-projects"
//             data-slot="tabs-trigger"
//             className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4"
//             tabIndex={-1}
//             data-orientation="horizontal"
//             data-radix-collection-item=""
//           >
//             All Projects
//           </button>
//           <button
//             type="button"
//             role="tab"
//             aria-selected="false"
//             aria-controls="radix-_R_inpfiv5ubsnpnb_-content-branding"
//             data-state="inactive"
//             id="radix-_R_inpfiv5ubsnpnb_-trigger-branding"
//             data-slot="tabs-trigger"
//             className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4"
//             tabIndex={-1}
//             data-orientation="horizontal"
//             data-radix-collection-item=""
//           >
//             Productivity
//           </button>
//           <button
//             type="button"
//             role="tab"
//             aria-selected="false"
//             aria-controls="radix-_R_inpfiv5ubsnpnb_-content-design"
//             data-state="inactive"
//             id="radix-_R_inpfiv5ubsnpnb_-trigger-design"
//             data-slot="tabs-trigger"
//             className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4"
//             tabIndex={-1}
//             data-orientation="horizontal"
//             data-radix-collection-item=""
//           >
//             Games
//           </button>
//           <button
//             type="button"
//             role="tab"
//             aria-selected="false"
//             aria-controls="radix-_R_inpfiv5ubsnpnb_-content-marketing"
//             data-state="inactive"
//             id="radix-_R_inpfiv5ubsnpnb_-trigger-marketing"
//             data-slot="tabs-trigger"
//             className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4"
//             tabIndex={-1}
//             data-orientation="horizontal"
//             data-radix-collection-item=""
//           >
//             Entertainment
//           </button>
//         </div>

//         {/* Project Cards */}
//       </div>
//       {projectIntroCardItems.map((projectItem) => {
//         return (
//           <div className="relative mb-24">
//             <div className="aspect-square overflow-hidden rounded-xl">
//               <Image
//                 src={projectItem.src}
//                 alt={projectItem.alt}
//                 width={200}
//                 height={200}
//                 className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//             <div
//               data-slot="card"
//               className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border absolute inset-x-6 -bottom-24 py-8 shadow-none"
//             >
//               <div
//                 data-slot="card-content"
//                 className="px-6 space-y-4 text-center"
//               >
//                 <p className="text-primary"></p>
//                 <h3 className="text-xl font-medium">{projectItem.name}</h3>
//                 <a
//                   href={`#${slugify(projectItem.name)}`}
//                   data-slot="button"
//                   className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 h-10 px-6 has-[&gt;svg]:px-4 text-primary bg-primary/10 hover:bg-primary/20 rounded-lg text-base"
//                 >
//                   View Details
//                 </a>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       <div></div>

//       {/* More Project Information */}
//       {projectcards.map((projectCard, idx) => (
//         <div
//           key={projectCard.name || `project-${idx}`}
//           id={slugify(projectCard.name)}
//           className="scroll-mt-24"
//         >
//           <PortfolioCard project={projectCard} />
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import PortfolioCard from "../../components/PortfolioCard";
import { projectcards, projectIntroCardItems } from "@/app/lib/projectCardData";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

type Category = "all" | "productivity" | "games" | "entertainment";

export default function Page() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filteredIntro = useMemo(() => {
    if (activeTab === "all") return projectIntroCardItems;
    return projectIntroCardItems.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const filteredCards = useMemo(() => {
    if (activeTab === "all") return projectcards;
    return projectcards.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <div>
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Projects
      </h1>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as Category)}>
        <div className="flex overflow-x-auto min-[475px]:justify-center">
          <TabsList className="w-fit">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="productivity">Productivity</TabsTrigger>
            <TabsTrigger value="games">Games</TabsTrigger>
            <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
          </TabsList>
        </div>

        {/* Project Intro Cards (filtered) */}
        <div className="mt-8">
          {filteredIntro.map((projectItem) => (
            <div key={projectItem.name} className="relative mb-24">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src={projectItem.src}
                  alt={projectItem.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border absolute inset-x-6 -bottom-24 py-8 shadow-none">
                <div className="px-6 space-y-4 text-center">
                  <h3 className="text-xl font-medium">{projectItem.name}</h3>

                  <a
                    href={`#${slugify(projectItem.name)}`}
                    className="inline-flex h-10 items-center justify-center rounded-lg bg-primary/10 px-6 text-base font-medium text-primary hover:bg-primary/20"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tabs>

      {/* More Project Information (filtered) */}
      <div className="pt-16">
        {filteredCards.map((projectCard, idx) => (
          <div
            key={projectCard.name || `project-${idx}`}
            id={slugify(projectCard.name)}
            className="scroll-mt-24"
          >
            <PortfolioCard project={projectCard} />
          </div>
        ))}
      </div>
    </div>
  );
}
