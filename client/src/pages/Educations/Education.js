import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import EducationCard from "./EducationCard";
import { MdSchool } from "react-icons/md";
import "./Education.css";
import "react-vertical-timeline-component/style.min.css";
import { EducationConstant } from "../../constant";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          {EducationConstant.map((item) => (
            <EducationCard
              date={item.date}
              icon={item.icon}
              courseName={item.courseName}
              orgName={item.orgName}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
