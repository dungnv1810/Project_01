import React from "react";
import { SkillsOverviewWrapper } from "./style";
import SkillsoverviewItem from "./Skillsoverviewitem";
import Title from "../../Title";
import PropStypes from "prop-types"

const SkillsOverview = () =>{
    const BoxData1 = {
          id: 1,
          image: "https://themes.3rdwavemedia.com/instance/bs4/assets/images/frontend-icon.svg",
          title: "Fontend",
          des: [
            "React/Redux/Angular",
            "Javascript",
            "Node.js",
            "Webpack/Gulp/Grunt",
            "HTML/CSS/SASS/LESS"
          ]
        }
    const BoxData2 = {
          id: 2,
          image: "https://themes.3rdwavemedia.com/instance/bs4/assets/images/backend-icon.svg",
          title: "Backend",
          des: [
            "Python/Django",
            "Ruby/Rails",
            "PHP",
            "PostgresSQL/MySQL",
            "MongoDB"
          ]
        }
    const BoxData3 = {
          id: 3,
          image: "https://themes.3rdwavemedia.com/instance/bs4/assets/images/other-skills-icon.svg",
          title: "Others",
          des: [
            "DevOps",
            "Unit Testing",
            "UX/Wireframing",
            "Sketch/Balsamiq",
            "Wordpress/Shopify"
          ]
        }
    return(
        <React.Fragment>
            <SkillsOverviewWrapper>
                <div className="skilltext">
                    <Title title="Skills Overview"/>
                    
                    <p id="text">
                        I have more than 8 years' experience building rich web applications
                        for clients all over the world. Below is a<br/> quick overview of my main
                        technical skill sets and tools I use. Want to find out more about my
                        experience?
                    </p>
                    <a href="#">Check out my online resume.</a>
                </div>
                <div className="skilloverview">
                    <SkillsoverviewItem item={BoxData1}/>
                    <SkillsoverviewItem item={BoxData2}/>
                    <SkillsoverviewItem item={BoxData3}/>
                </div>
            </SkillsOverviewWrapper>
        </React.Fragment>
    )
}

SkillsOverview.prototype={

}

export default SkillsOverview;