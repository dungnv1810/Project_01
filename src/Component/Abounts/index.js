import React from "react";
import Abount from "./Abount";
import SkillsOverview from "./Skillsoverview";
import LogoItem from "./LogoItem";
import Client from "./Client";
import FeaturedProjects from "./FeaturedProjects";
import LatestBlog from "./LatestBlog";
import FeaturedIn from "./FeaturedIn";
const Abounts = () => {
    return(
        <React.Fragment>
            <Abount/>
            <SkillsOverview/>
            <LogoItem/>
            <Client/>
            <FeaturedProjects/>
            <LatestBlog/>
            <FeaturedIn/>
        </React.Fragment>
    )
}
export default Abounts;