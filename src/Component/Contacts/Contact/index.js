import React from "react";
import {AiOutlineTwitter, AiOutlineMedium, AiOutlineCodepen} from "react-icons/ai";
import {GrLinkedinOption} from "react-icons/gr";
import {DiGithubAlt} from "react-icons/di";
import {FaStackOverflow} from "react-icons/fa";

import { ContactWrapper } from "./style";
const Contact = () => {
    return(
        <>
            <ContactWrapper>
                <div className="wrapper">
                        <div className="inner">
                            <img src="https://themes.3rdwavemedia.com/instance/bs4/assets/images/profile.jpg" alt="ảnh lỗi" className="images"/>
                        </div>
                    <div className="container">
                        <div className="speech-bubble">
                            <p>I'm currently taking on freelance work. If you are interested in hiring me for your project please use the form below to get in touch. Want to know how I work and what I can offer? Check out my 
                                <a href="#"> project case studies </a>
                                and
                                <a href="#"> resume </a>.
                            </p>
                            <h6>You can also find me on the following channels</h6>
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
                                        <DiGithubAlt className="icon"/>
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
                        <div className="contact-form">
                            <h3>Get In Touch</h3>
                            <div className="form">
                                <div className="input">
                                    <input
                                        type='text'
                                        name='name'
                                        value={null}
                                        autoComplete="off"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="input">
                                    <input
                                        type='email'
                                        name='email'
                                        value={null}
                                        autoComplete="off"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="message">
                                <textarea rows='15' placeholder="Enter your message"></textarea>
                            </div>
                            <div className="sendit">
                                <button type="submit" className="btn">Send It</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ContactWrapper>
        </>
    )
}
export default Contact;