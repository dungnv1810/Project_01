import React from "react";
import { FootersWrapper } from "./style";
const Footers = () => {
    return(
        <React.Fragment>
            <FootersWrapper>
                <footer className="footer text-light text-center py-2">
                        <small class="copyright">Template Copyright © <a class="text-light" href="#" target="">3rd Wave Media</a></small>
                </footer>
            </FootersWrapper>
        </React.Fragment>
    )
}
export default Footers