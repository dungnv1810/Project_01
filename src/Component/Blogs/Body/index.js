import React from "react";
import { BodyWrapper } from "./style";
const Body = () => {
    return(
        <>
            <BodyWrapper>
                <div className="wrapper">
                    <div className="images">
                        <span>Featured</span>
                    </div>
                    <div className="content">
                        <h4 className="title">
                            <a href="#">How to Create an Angular Library</a>
                        </h4>
                        <div className="card-text">
                            <div className="excerpt">
                                Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...
                            </div>
                            <button className="btn">Read more</button>
                        </div>
                    </div>
                </div>
            </BodyWrapper>
        </>
    )
}
export default Body