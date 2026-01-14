import { poppins, barlow } from "@/app/ui/fonts";
import VerticalEventTimeline from "@/app/ui/dashboard/about/verticaleventtimeline";
import Image from "next/image";

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
      <div id="skills">
        <p className="">Skills and Technologies</p>
        <div className="">
          <table className="text-center">
            <tbody>
              <tr>
                <td>
                  <Image
                    src="assets/images/java-logo.svg"
                    width={50}
                    height={50}
                    alt="Java Logo"
                  />
                  <br />
                  Java
                </td>
                <td>
                  <Image
                    src="https://cdn.simpleicons.org/c"
                    width={50}
                    height={50}
                    alt="C logo"
                    unoptimized
                  />
                  <br />C
                </td>
                <td>
                  <img src="https://cdn.simpleicons.org/python" width="50" />
                  <br />
                  Python
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn.simpleicons.org/mysql" width="50" />
                  <br />
                  SQL
                </td>
                <td>
                  <img src="https://cdn.simpleicons.org/html5" width="50" />
                  <br />
                  HTML
                </td>
                <td>
                  <img
                    src="https://cdn.simpleicons.org/javascript"
                    width="50"
                  />
                  <br />
                  JavaScript
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn.simpleicons.org/react" width="50" />
                  <br />
                  React
                </td>
                <td>
                  <img src="https://cdn.simpleicons.org/nodedotjs" width="50" />
                  <br />
                  Node.js
                </td>
                <td>
                  <img src="https://cdn/simpleicons.org/docker" width="50" />
                  <br />
                  Docker
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn.simpleicons.org/jenkins" width="50" />
                  <br />
                  Jenkins
                </td>
                <td>
                  <img src="https://cdn.simpleicons.org/react" width="50" />
                  <br />
                  React Native
                </td>
                <td>
                  <img src="https://cdn.simpleicons.org/mongodb" width="50" />
                  <br />
                  MongoDB
                </td>
              </tr>
              <tr>
                <td>Object-oriented Development</td>
                <td>
                  <img src="https://cdn.simpleicons.org/git" width="50" />
                  <br />
                  Version Control (GIT)
                </td>
                <td>Problem Solving</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <VerticalEventTimeline />
    </div>
  );
}
