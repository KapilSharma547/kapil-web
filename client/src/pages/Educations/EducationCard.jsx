import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const EducationCard = ({ date, icon, courseName, orgName }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "white", color: "black" }}
      contentArrowStyle={{ borderRight: "7px solid  white" }}
      date={date}
      iconStyle={{ background: "#138781", color: "#fff" }}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">{courseName}</h3>
      <h4 className="vertical-timeline-element-subtitle">{orgName}</h4>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
