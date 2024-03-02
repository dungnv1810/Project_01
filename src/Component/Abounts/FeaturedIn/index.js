import React from "react";
import Title from "../../Title";
import presslogo1 from "../../Assets/press-logo-1.png"
import presslogo2 from "../../Assets/press-logo-2.png"
import presslogo3 from "../../Assets/press-logo-3.png"
import presslogo4 from "../../Assets/press-logo-4.png"
import { FeaturedInWrapper } from "./style";
const FeaturedIn = () => {
    return(
        <React.Fragment>
            <FeaturedInWrapper>
            <div className="container-fluid">
                <Title title="Featured Projects"/>
                <div className="container padding">
                    <div className="row text-center padding">
                    <div className="press-logos row">
                        <div className="align-self-center press-logo px-4 px-lg-3 col-6 col-lg-3 mr-0 px-md-5 px-lg-5 mb-3 mb-lg-0">
                            <a className="logo-link" href="#" target="_blank">
                                <img className="img-fluid svg-ie-fix" src={presslogo1} /></a></div>
                        <div className="align-self-center press-logo px-4 px-lg-3  col-6 col-lg-3 mr-0 px-md-5 px-lg-5 mb-3 mb-lg-0">
                            <a className="logo-link" href="#" target="_blank">
                                <img className="img-fluid svg-ie-fix" src={presslogo2} /></a></div>
                        <div className="align-self-center press-logo px-4 px-lg-3  col-6 col-lg-3 mr-0 px-md-5 px-lg-5 mb-3 mb-lg-0">
                            <a className="logo-link" href="#" target="_blank">
                                <img className="img-fluid svg-ie-fix" src={presslogo3} /></a></div>
                        <div className="align-self-center press-logo px-4 px-lg-3 col-6 col-lg-3 mr-0 px-md-5 px-lg-5 mb-3 mb-lg-0">
                            <a className="logo-link" href="#" target="_blank">
                                <img className="img-fluid svg-ie-fix" src={presslogo4} /></a></div>
                    </div>
                    </div>
                </div>
            </div>
            </FeaturedInWrapper>
        </React.Fragment>
    )
}
export default FeaturedIn