import { ProjectCards, ProjectListObject } from "./types";

export const projectIntroCardItems = [
  {
    name: "SportsShuffle",
    src: "/sports-shuffle-logo.png",
    alt: "Sports Shuffle Logo",
    cardText:
      "A real-time, multiplayer sports-themed card game that lets players join shared rooms, draw randomized &quot;event&quot; cards, and compete for points.",
  },
  {
    name: "BookKeeper",
    src: "/bookkeeper-screen.png",
    alt: "BookKeeper Logo",
    cardText: "A full-stack web app to manage and track your personal library.",
  },
  {
    name: "SpotRoulette",
    src: "/roulettelogo3.png",
    alt: "Spot Rouletee Logo",
    cardText:
      "A multi-platform &quot;place picker&quot; that randomly suggests venues (e.g., restaurants, cafes, parks) from a curated collection based on user-selected categories an tags-built to explore end-to-end TypeScript/Express APIs, a React web client, and native mobile prototypes.",
  },
];

export const projectcards: ProjectCards = [
  {
    name: "BookKeeper",
    description:
      "A full-stack web app to manage and track your personal library. Users can sign up/Login, add books (with cover images fetched via ISBN/ASIN lookup), mark reading status, search by title/author/genre, and filter their collection. Built as a learning project to master modern full-stack development.",
    techStack: {
      frontend: [
        "React",
        "React Router",
        "Auth0 for Authentication",
        "Axios for HTTP",
        "Bootstrap 5 for styling",
      ],
      backend: [
        "Node.js with Express",
        "MongoDB driver",
        "JSON Web Tokens (JWT) for securing endpoints",
      ],
      devOps: [
        "Docker & Docker-Compose for containerized local development",
        "Jest & Supertest for API testing",
        "Swagger (swagger-jsdoc + swagger-ui-express) for API docs",
      ],
    },
    screenshots: [],
    github: "",
    liveDemo: "",
    caseStudy: [
      {
        challenge:
          "Integrating Auth0 for secure user authentication without compromising UX.",
        solution:
          "Followed Auth0&apos;s React SDK docs to implement login/signup flows and protected routes.",
        whatILearned: "OAuth fundamentals, handling auth state in React.",
      },
      {
        challenge:
          "Managing complex state for filtering/searching large lists in React.",
        solution:
          "Lifted state into parent, used controlled components for filters, optimized re-renders with useMemo.",
        whatILearned:
          "Effective state management patterns and performance tuning in React.",
      },
    ],
  },
  {
    name: "SpotRoulette",
    description:
      " A multi-platform &quot;place picker&quot; that randomly suggests venues (e.g., restaurants, cafes, parks) from a curated collection based on user-selected categories and tags-built to explore end-to-end TypeScript/Express APIs, a React web client, and native mobile prototypes.",
    techStack: {
      frontend: [
        "React",
        "TypeScript",
        "React Router",
        "Axios for HTTP requests",
        "CSS",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "CORS",
        "serves static JSON datasets for places & tags via custom /api/places and /api/tags routes",
      ],
      devOps: [
        "Git & GitHub for version control",
        "npm & ts-node-dev for local development scripts",
      ],
    },
    screenshots: [],
    github: "github.com/jnycolej/SpotRoulette",
    liveDemo: "",
    caseStudy: [
      {
        challenge:
          "Designing a flexible, tag-based filter with &quot;any&quot; vs. &quot;all&quot; match modes.",
        solution:
          "Solution: Built a reusable filterPlaces utility to combine type and tag filters dynamically. <br />",
        whatILearned:
          "Functional programming patterns in TypeScript and robust API design.",
      },
      {
        challenge: "Serving location data without a full database.",
        solution:
          "Used static JSON files (places.json, tags.json) and simple Express routes to mock production-style endpoints",
        whatILearned:
          "Trade-offs of prototyping with static vs. dynamic data sources.",
      },
      {
        challenge: "Rapidly prototyping cross-platform mobile experiences.",
        solution:
          "Created early Android (Kotlin) and iOS (Objective-C++) demos to validate UX flows",
        whatILearned:
          "Foundations of mobile development workflows and platform differences.",
      },
    ],
  },
  {
    name: "SportsShuffle",
    description:
      "A real-time, multiplayer sports-themed game platform featuring card-based gameplay, trivia, and live score tracking. Players can join shared rooms, trigger game events, and compete during live sessions. Built as a learning project to explore real-time communication, game state management, and scalable backend architecture.",
    techStack: {
      frontend: ["React", "JavaScript", "HTML", "CSS"],
      backend: [
        "Node.js with Express",
        "Socket.IO for real-time communication",
      ],
      devOps: ["Heroku for deployment", "GitHub for version control"],
    },
    screenshots: [],
    github: "https://github.com/jnycolej/GamesApp",
    liveDemo: "",
    caseStudy: [
      {
        challenge:
          "Building a multiplayer experience that keeps all players in sync during live gameplay.",
        solution:
          "Used Socket.IO rooms and server-controlled game logic to broadcast events and updates consistently across all connected clients.",
        whatILearned:
          "Real-time event handling, client-server synchronization, and managing shared application state.",
      },
      {
        challenge:
          "Managing complex game logic while keeping the UI responsive and easy to extend.",
        solution:
          "Separated game rules from UI components and centralized state updates on the backend to reduce client-side complexity.",
        whatILearned:
          "Architectural separation of concerns and designing systems that scale as features grow.",
      },
    ],
  },
];

//   {
//     name: "",
//     description: "",
//     techStack: {
//         frontend: [],
//         backend: [],
//         devOps: []
//     },
//     screenshots: [],
//     github: "",
//     liveDemo: "",
//     caseStudy: [
//         {
//             challenge: "",
//             solution: "",
//             whatILearned: ""
//         }
//     ]
//   }
{
  /* <!--
        <p>For each project</p>
        <ul>
            <li>Project Title & Short Description (What it does, why you built it...)</li>
            <li>Tech Stack (e.g., React, Node.js, PostgreSQL, ...)</li>
            <li>Screenshots or GIF (show what it looks like!)</li>
            <li>GitHub Repo + Live Demo Link</li>
            <li>(Optional) A Case Study (Challenges, solutions, & what you learned</li>
        </ul>
        <p>If you don't have many projects: </p>
        <ul>
            <li>Rebuild a known website (e.g., Netflix, Twitter Clone)</li>
            <li>Contribute to open-source projects on GitHub</li>
            <li>Join hackathon or coding challenges</li>
        </ul> --> */
}
