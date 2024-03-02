import React from "react";
import { TalkWrapper } from "./style";
const Talk = () => {
    return(
        <React.Fragment>
            <TalkWrapper>
                <div className="container text-left">
                    <h2 className="page-heading mb-3">Talks</h2>
                    <div className="page-heading-tagline">
                        Want me to talk at your event? <br className="d-md-none"/> <a className="link-on-bg" href="contact.html">Get in touch</a>
                    </div>
                </div>
                
            </TalkWrapper>
        </React.Fragment>
    )
}
export default Talk