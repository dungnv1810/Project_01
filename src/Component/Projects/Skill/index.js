import React from "react";
import SkillBox from './Skillbox'
import { SkillWrapper } from "./style";
const Skill = () => {
    const Box01 ={
        id: 1,
        text: "Client: Google",
        content:"Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...",
        image_work:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/projects/project-1-thumb.jpg",
        image_logo:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-1-inverse.svg",
        title: "SaaS Product",
        card: ["Angular", "Django", "MongoDB", "HTML/CSS"]
    };
    const Box02 ={
        id: 2,
        text: "Client: Spotify",
        content:"Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...",
        image_work:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/projects/project-2-thumb.jpg",
        image_logo:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-2-inverse.svg",
        title: "Webapp Development",
        card: ["Rails", "jQuery", "PostgresSQL", "HTML/LESS"]
    };  
    const Box03 ={
        id: 3,
        text: "Client: Evernote",
        content:"Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...",
        image_work:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/projects/project-3-thumb.jpg",
        image_logo:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-3-inverse.svg",
        title: "Webapp Development",
        card: ["React", "Python", "MySQL", "Webpack"]
    };  
    const Box04 ={
        id: 4,
        text: "Client: Facebook",
        content:"Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...",
        image_work:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/projects/project-4-thumb.jpg",
        image_logo:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-4-inverse.svg",
        title: "Webapp Development",
        card: ["Angular", "Django", "MongoDB", "HTML/CSS"]
    };  
    const Box05 ={
        id: 5,
        text: "Client: Zendesk",
        content:"Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...",
        image_work:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/projects/project-5-thumb.jpg",
        image_logo:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-5-inverse.svg",
        title: "Webapp Development",
        card: ["Rails", "jQuery", "PostgresSQL", "HTML/LESS"]
    };  
    const Box06 ={
        id: 6,
        text: "Client: Coinbase",
        content:"Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...",
        image_work:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/projects/project-6-thumb.jpg",
        image_logo:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-6-inverse.svg",
        title: "Webapp Development",
        card: ["React", "Python", "MySQL", "Webpack"]
    };  
    const Box07 ={
        id: 7,
        text: "Client: Facebook",
        content:"Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...",
        image_work:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/projects/project-7-thumb.jpg",
        image_logo:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-7-inverse.svg",
        title: "Webapp Development",
        card: ["Angular", "Django", "MongoDB", "HTML/CSS"]
    };  
    const Box08 ={
        id: 8,
        text: "Client: Zendesk",
        content:"Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...",
        image_work:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/projects/project-8-thumb.jpg",
        image_logo:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-8-inverse.svg",
        title: "Webapp Development",
        card: ["Rails", "jQuery", "PostgresSQL", "HTML/LESS"]
    };
    const Box09 ={
        id: 9,
        text: "Client: Coinbase",
        content:"Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...",
        image_work:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/projects/project-9-thumb.jpg",
        image_logo:
            "https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-9-inverse.svg",
        title: "Webapp Development",
        card: ["React", "Python", "MySQL", "Webpack"]
    };  
    
    return(
        <React.Fragment>
            <SkillWrapper>
                <div className="container">
                    <div className="text-center">
                        <a className="filters" href="#">All</a>
                        <a className="filters" href="#">Angular</a>
                        <a className="filters" href="#">React</a>
                        <a className="filters" href="#">Python/Django</a>
                        <a className="filters" href="#">Ruby/Rails</a>
                        <a className="filters" href="#">PHP</a>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-4">
                            <SkillBox item={Box01}/>
                        </div>
                        <div className="col-12 col-md-4">
                            <SkillBox item={Box02}/>
                        </div>
                        <div className="col-12 col-md-4">
                            <SkillBox item={Box03}/>
                        </div>
                        <div className="col-12 col-md-4">
                            <SkillBox item={Box04}/>
                        </div>
                        <div className="col-12 col-md-4">
                            <SkillBox item={Box05}/>
                        </div>
                        <div className="col-12 col-md-4">
                            <SkillBox item={Box06}/>
                        </div>
                        <div className="col-12 col-md-4">
                            <SkillBox item={Box07}/>
                        </div>
                        <div className="col-12 col-md-4">
                            <SkillBox item={Box08}/>
                        </div>
                        <div className="col-12 col-md-4">
                            <SkillBox item={Box09}/>
                        </div>
                    </div>
                </div>
                    
            </SkillWrapper>
        </React.Fragment>
    )
}
export default Skill;