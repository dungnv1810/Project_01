import React from "react";
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import { VideoWrapper } from "./style";
const Videos = (props) => {
    const {item} = props
    const {video, title, clock, videos, content} = item
    return(
        <React.Fragment>
            <VideoWrapper>
                <div className="wrapper">
                    <div className="video">
                        <iframe className="embed-responsive-item" src={video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                    </div>
                    <div className="content">
                        <h4>{title}</h4>
                        <ul className="list">
                            <li className="list-item">
                                {clock} <span>10 June, 2018</span>
                            </li>
                            <li className="list-item">
                                {videos} <span>10 June, 2018</span>
                            </li>
                        </ul>
                        <p className="title">
                            {content}
                        </p>
                    </div>
                </div>
            </VideoWrapper>
        </React.Fragment>
    )
}
export default Videos;