import React from "react";
import {AiOutlineTwitter, AiOutlineMedium, AiOutlineCodepen} from "react-icons/ai"
import {GrLinkedinOption} from "react-icons/gr"
import {FaGithubAlt, FaStackOverflow} from "react-icons/fa"
import { BlogWrapper } from "./style";
const Header = () => {
    return(
        <>
            <BlogWrapper>
                <div className="wrapper">
                    <img src="https://themes.3rdwavemedia.com/instance/bs4/assets/images/profile.jpg" alt="ảnh lỗi" className="images"/>
                    <div className="content">
                        <h2 className="title">Steve Doe's Blog</h2>
                        <div className="noidung">
                            I write about web development and life as a developer. <br/>
                            You can follow me via the various channels below:
                        </div>
                        <ul className="list">
                            <li className="item">
                                <a href="#" className="link">
                                    <AiOutlineTwitter className="icon"/>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" className="link">
                                    <GrLinkedinOption className="icon"/>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" className="link">
                                    <FaGithubAlt className="icon"/>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" className="link">
                                    <FaStackOverflow className="icon"/>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" className="link">
                                    <AiOutlineMedium className="icon"/>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" className="link">
                                    <AiOutlineCodepen className="icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlogWrapper>
        </>
    )
}
export default Header