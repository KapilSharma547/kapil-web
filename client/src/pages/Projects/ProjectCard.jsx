import React from "react";
import { kapilgithub } from "../../constant";

const ProjectCard = () => {
  return (
    <div className="col-md-4">
      <div className="card rounded">
        <div className="card-image">
          <span className="card-notify-badge">Full stack</span>
          <img
            src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
            alt="project1"
          />
        </div>
        <div className="card-image-overly m-auto mt-3">
          <span className="card-detail-badge">Node</span>
          <span className="card-detail-badge">Express</span>
          <span className="card-detail-badge">react</span>
          <span className="card-detail-badge">Mongodb</span>
        </div>
        <div className="card-body text-center">
          <div className="ad-title m-auto">
            <h6 className="text-uppercase">Kapil Shoping Website</h6>
          </div>
          <a className="ad-btn" href={kapilgithub}>
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
