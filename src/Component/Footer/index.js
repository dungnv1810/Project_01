import React from "react";
import avata from "../Assets/avata.jpg";
import Button from "../Commont/Button";
import { FooterWrapper } from "./style";
const Footer = () => {
    return(
        <React.Fragment>
            <FooterWrapper>
                <div className="container">
                    <div className="text-center">
                        <img className="profile-small d-inline-block mx-auto rounded-circle mb-2" src={avata} alt="ảnh lỗi" style={{width: '80px'}}/>
                    </div>
                    <h3 className="section-title font-weight-bold text-center mb-2">
                        Interested in hiring me for your project?
                    </h3>
                    <div class="section-intro mx-auto text-center mb-3">
                        Looking for an experienced full-stack developer to build your web app or ship your software product? To start <br/>an initial chat, just drop me an email at <a class="link-on-bg" href="#">steve.doe@youremail.com</a> or use the <a class="link-on-bg" href="contact.html">form on the contact page</a>.
                    </div>
                    <Button name="Let's Talk"/>
                </div>
            </FooterWrapper>
        </React.Fragment>
    )
}
export default Footer;