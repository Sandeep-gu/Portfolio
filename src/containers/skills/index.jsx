import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import skills from "../../utils/skills";
import "./style.css";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
export default function Skills() {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText={"Skills"}
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills_content_wrapper">
        {skills.map((skill, i) => (
          <div className="skills_content_wrapper_inner">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills_content_wrapper_inner_category_text">
                {skill.label}
              </h3>
              <div>
                {skill.Data.map((tech, i) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity:1", "opacity:0"]}
                    iterationCount="1"
                  >
                    <div className="skills_content_wrapper_inner_category_text_tech">
                      <p>{tech.label}</p>
                      <Line
                        percent={tech.value}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
}
