import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
import WorkExperiencCard from "./WorkExperiencCard";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Express
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <WorkExperiencCard />
            <WorkExperiencCard />
            <WorkExperiencCard />
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
