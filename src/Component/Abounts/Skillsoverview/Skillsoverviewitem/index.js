import React from "react";
import { Skillsoverviewitem } from "./style";
import PropStyles from "prop-types";
const SkillsoverviewItem = (props) =>{
    const {item} = props
    const {image, title, des} = item
    return(
        <React.Fragment>
            <Skillsoverviewitem>
                <div className="icon">
                    <img src={image} alt="ảnh lỗi"/>
                </div>
                <h4 className="title">{title}</h4>
                <div className="content">
                    <p className="des">
                        {des.map((item, index) => {
                            return (
                                <React.Fragment>
                                    <span className="iconskill">
                                        <i class="fa-solid fa-check"></i>
                                    </span>
                                    <span className="skill">{item}</span>
                                    <br />
                                </React.Fragment>
                            );
                        })}
                    </p>
                </div>
            </Skillsoverviewitem>
        </React.Fragment>
    )
}

SkillsoverviewItem.prototype={

}

export default SkillsoverviewItem;