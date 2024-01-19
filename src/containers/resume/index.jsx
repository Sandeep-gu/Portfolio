import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./style.css";
import data from "../../utils/experience";
export default function Resume() {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText={"My Resume"}
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline_experience">
          <h3 className="timeline_experiece_header_text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data?.experience?.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experience_vertical_timeline_element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-sub-text-color)",
                }}
                date="2020 - Present"
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical_timeline_element_title_wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                  <h5>{item.description}</h5>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline_experience">
          <h3 className="timeline_experiece_header_text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data?.education?.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experience_vertical_timeline_element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-sub-text-color)",
                }}
                date="2020 - Present"
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical_timeline_element_title_wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                  <h5>{item.description}</h5>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
