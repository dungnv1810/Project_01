import React from "react";
import Title from "../../Title";
import { FeaturedProjectsWrapper } from "./style";
import Box from "./Box";
import PropStyles from "prop-types"

const FeaturedProjects = () =>{
    const Box01 ={
        id: 1,
        text: "Client: Google",
        content:"Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...",
        image_work:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/projects/project-1-thumb.jpg",
        image_logo:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-1.svg",
        title: "SaaS Product",
        card: ["Angular", "Django", "MongoDB", "HTML/CSS"]
    };
    const Box02 ={
        id: 1,
        text: "Client: Google",
        content:"Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...",
        image_work:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/projects/project-2-thumb.jpg",
        image_logo:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-2.svg",
        title: "Webapp Development",
        card: ["Angular", "Django", "MongoDB", "HTML/CSS"]
    };
    const Box03 ={
        id: 1,
        text: "Client: Google",
        content:"Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...",
        image_work:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/projects/project-3-thumb.jpg",
        image_logo:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-3.svg",
        title: "Mobile app development",
        card: ["Angular", "Django", "MongoDB", "HTML/CSS"]
    };
    return(
        <React.Fragment>
            <FeaturedProjectsWrapper>
                <h2><Title title="Featured Projects"/></h2>
                <div className="box">
                    <Box item={Box01}/>
                    <Box item={Box02}/>
                    <Box item={Box03}/>
                </div>
            </FeaturedProjectsWrapper>
        </React.Fragment>
    )
}

FeaturedProjects.prototype={

}
export default FeaturedProjects;