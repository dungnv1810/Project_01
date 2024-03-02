import React from "react";
import {AiOutlineDownload} from "react-icons/ai"
import { HeaderWrapper } from "./style";
const Header = () => {
    return(
        <>
            <HeaderWrapper>
                <div className="container">
                    <h2 className="page-heading">Resume</h2>
                    <a href="#">
                        <AiOutlineDownload/>
                        Download PDF Version
                    </a>
                </div>
            </HeaderWrapper>
        </>
    )
}
export default Header;