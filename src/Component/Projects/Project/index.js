import React from "react";
import Button from "../../Commont/Button";
import { ProjectWrapper } from "./style";
const Project = () => {
    return(
        <React.Fragment>
            <ProjectWrapper>
                <div className="container text-left">
                    <h2 className="page-heading mb-3">Projects</h2>
                    <div className="page-heading-tagline">In-depth Case Studies to show you what I can offer and how I work</div>
                </div>
            </ProjectWrapper>
        </React.Fragment>
    )
}
export default Project;