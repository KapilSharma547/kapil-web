import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const WorkExperiencCard = () => {
  return (
    <div>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "white", color: "#1e1e2c" }}
        contentArrowStyle={{
          borderRight: "7px solid  white",
        }}
        date="2023 - present"
        iconStyle={{ background: "#1e1e2c", color: "#fff" }}
        icon={<SiReact />}
      >
        <h3 className="vertical-timeline-element-title">
          Full Stack Developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">xyz, pvt ltd</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
    </div>
  );
};

export default WorkExperiencCard;
