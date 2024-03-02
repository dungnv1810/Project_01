import React from "react";
import Button from "../../Commont/Button";
import Title from "../../Title";
import blogpostthumb1 from "../../Assets/blog-post-thumb-1.jpg"
import blogpostthumb2 from "../../Assets/blog-post-thumb-2.jpg"
import blogpostthumb3 from "../../Assets/blog-post-thumb-3.jpg"
import blogpostthumb4 from "../../Assets/blog-post-thumb-4.jpg"
import { LatestBlogWrapper } from "./style";
const LatestBlog = () => {
    return(
        <React.Fragment>
            <LatestBlogWrapper>
                <Button name="View all projects"/>
                <div className="container">
                    <Title title="Latest Blog Posts"/>
                    <div className="row blog-cards ">
                        <div className="col-12 col-lg-6">
                            <div className="card shadow-sm mb-5">
                                <div className="inner">
                                    <img src={blogpostthumb1} className="card-img-top" alt="ảnh lỗi" />
                                    
                                </div>
                                <div className="card-body text-left pb-4">
                                    <h4 className="card-title text-truncate mb-2">
                                        <a href="#">How to Create an Angular Library</a>
                                    </h4>
                                    <div className="card-text">
                                        <ul class="meta list-inline mb-1">
                                            <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>June 26, 2018</li>
                                            <li class="list-inline-item"><i class="fa-solid fa-comment mr-2"></i><a href="#">4 Comments</a></li>
                                        </ul>
                                        <div class="excerpt"> 
                                            Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="card shadow-sm mb-5">
                                <div className="inner">
                                    <img src={blogpostthumb2} className="card-img-top" alt="ảnh lỗi" />
                                </div>
                                <div className="card-body text-left pb-4">
                                    <h4 className="card-title text-truncate mb-2">
                                        <a href="#">React, Bootstrap, and Angular- The Basics</a>
                                    </h4>
                                    <div className="card-text">
                                        <ul class="meta list-inline mb-1">
                                            <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>June 26, 2018</li>
                                            <li class="list-inline-item"><i class="fa-solid fa-comment mr-2"></i><a href="#">4 Comments</a></li>
                                        </ul>
                                        <div class="excerpt"> 
                                            Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="card shadow-sm mb-5">
                                <div className="inner">
                                    <img src={blogpostthumb3} className="card-img-top" alt="ảnh lỗi" />
                                </div>
                                <div className="card-body text-left pb-4">
                                    <h4 className="card-title text-truncate mb-2">
                                        <a href="#">Best Practices for Code Review</a>
                                    </h4>
                                    <div className="card-text">
                                        <ul class="meta list-inline mb-1">
                                            <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>June 26, 2018</li>
                                            <li class="list-inline-item"><i class="fa-solid fa-comment mr-2"></i><a href="#">4 Comments</a></li>
                                        </ul>
                                        <div class="excerpt"> 
                                            Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="card shadow-sm mb-5">
                                <div className="inner">
                                    <img src={blogpostthumb4} className="card-img-top" alt="ảnh lỗi" />
                                </div>
                                <div className="card-body text-left pb-4">
                                    <h4 className="card-title text-truncate mb-2">
                                        <a href="#">Learn React Components</a>
                                    </h4>
                                    <div className="card-text">
                                        <ul class="meta list-inline mb-1">
                                            <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>June 26, 2018</li>
                                            <li class="list-inline-item"><i class="fa-solid fa-comment mr-2"></i><a href="#">4 Comments</a></li>
                                        </ul>
                                        <div class="excerpt"> 
                                            Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LatestBlogWrapper>
        </React.Fragment>
    )
}
export default LatestBlog