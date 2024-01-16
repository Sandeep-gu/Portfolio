import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.css";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
const personalDetails = [
  {
    label: "Name",
    value: "Sandeep Kumar Gupta",
  },
  {
    label: "Age",
    value: "27",
  },
  {
    label: "Address",
    value: "NaviMumbai India",
  },
  {
    label: "Email",
    value: "sandeepkg8756@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 6386725863",
  },
];

const jobSummary =
  "As a MERN Stack Developer with 1.5 years of experience, I've successfully contributed to diverse projects such as YouTube and Instagram clones, e-commerce platforms, and 'MoneyMakers-Algo.' Proficient in UI design, I combine React.js for dynamic front-end experiences with Node.js and Express.js for robust back-end solutions. My database expertise includes MongoDB and MySQL, and I implement JWT authentication for secure user access. With a focus on creating scalable and aesthetically pleasing applications, I bring a keen eye for UI design principles, enhancing user experiences across various projects.";
export default function About() {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText={"About Me"}
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personalwrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h1>MERN STACK DEVELOPER</h1>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about_content_personal">
              <h1 className="about_content_personal_header">
                Personal Details
              </h1>
              <ul>
                {personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Animate>
        </div>
        <div className="about_content_servicewrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about_content_servicewrapper_inner">
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
