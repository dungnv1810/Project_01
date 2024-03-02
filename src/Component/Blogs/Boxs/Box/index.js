import React from "react";
import { BoxWrapper } from "./style";
import {AiOutlineClockCircle} from "react-icons/ai"

const Box = (props) => {
    const {item} = props
    const {images, title, content, clock, day, comment, number} = item
    return(
        <>
            <BoxWrapper>
                <div className="inner">
                    <img src={images} alt="" className="images"/>
                    <div className="opacity"></div>
                    <button className="btn-readmore">Read more</button>
                </div>
                <div className="body">
                    <h4 className="title">
                        <a href="#" className="title-link">{title}</a>
                    </h4>
                    <div className="content">
                        {content}
                    </div>
                </div>
                <div className="button">
                    <ul className="list">
                        <li className="item">
                            {clock} <span>{day}</span>
                        </li>
                        <li className="item">
                            {comment} <span>{number}</span>
                        </li>
                    </ul>
                </div>
            </BoxWrapper>
        </>
    )
}
export default Box