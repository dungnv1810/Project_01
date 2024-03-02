import React from "react";
import { Boxstyle } from "./style";
import PropStyles from "prop-types"

const Box = (props) =>{
    const {item} = props;
    const {image_work, image_logo, text, content, title, card} = item;
    return(
        <React.Fragment>
            <Boxstyle image_work={image_work} image_logo={image_logo}>
                <div className="bg">
                    <div className="text">
                        <h5>{text}</h5>
                        <p>{content}</p>
                    </div>
                </div>
                <div className="card-foodter">
                    <h4 className="title-card">{title}</h4>
                    <ul className="list-card">
                        {card.map((item)=>{
                            return(
                                <li className="card" key={item.id}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </Boxstyle>
        </React.Fragment>
    )
}

Box.prototype={

}
export default Box;