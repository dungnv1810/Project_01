import React from "react";
import { SkillBoxWrapper } from "./style";
const SkillBox = (props) => {
    const {item} = props;
    const {image_work, image_logo, title, card, text, content} = item;
    return(
        <React.Fragment>
            <SkillBoxWrapper image_work={image_work} image_logo={image_logo}>
                    
                        <div className="card mb-5">
                            <div className="inner">
                                <div className="text">
                                    <h5>{text}</h5>
                                    <p>{content}</p>
                                </div>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-truncate text-center mb-0">
                                    <a href="#">{title}</a>
                                </h4>
                                <ul type="none" className="list-card">
                                    {card.map((item)=>{
                                        return(
                                            <li className="card">{item}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
              
            </SkillBoxWrapper>
        </React.Fragment>
    )
}
export default SkillBox;