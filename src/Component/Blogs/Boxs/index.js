import React from "react";
import {AiOutlineClockCircle, AiOutlineComment} from "react-icons/ai"
import Box from "./Box";
import { BoxWrapper } from "./style";
const Boxs = () => {
    const Data = [
        {
            id: 1,
            images: 'https://themes.3rdwavemedia.com/instance/bs4/assets/images/blog/blog-post-thumb-2.jpg',
            title: 'React, Bootstrap, and Angular- The Basics',
            content: 'Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...',
            clock: <AiOutlineClockCircle/>,
            day: 'June 18, 2018',
            comment: <AiOutlineComment/>,
            number: '12 Comments'
        },
        {
            id: 2,
            images: 'https://themes.3rdwavemedia.com/instance/bs4/assets/images/blog/blog-post-thumb-3.jpg',
            title: 'Best Practices for Code Review',
            content: 'Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...',
            clock: <AiOutlineClockCircle/>,
            day: 'May 7, 2018',
            comment: <AiOutlineComment/>,
            number: '23 Comments'
        },
        {
            id: 3,
            images: 'https://themes.3rdwavemedia.com/instance/bs4/assets/images/blog/blog-post-thumb-4.jpg',
            title: 'Learn React Components',
            content: 'Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...',
            clock: <AiOutlineClockCircle/>,
            day: 'Apr 25, 2018',
            comment: <AiOutlineComment/>,
            number: '18 Comments'
        },
        {
            id: 4,
            images: 'https://themes.3rdwavemedia.com/instance/bs4/assets/images/blog/blog-post-thumb-5.jpg',
            title: 'A Guide to Becoming a Full-Stack Developer',
            content: 'Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...',
            clock: <AiOutlineClockCircle/>,
            day: 'Mar 15, 2018',
            comment: <AiOutlineComment/>,
            number: '21 Comments'
        },
        {
            id: 5,
            images: 'https://themes.3rdwavemedia.com/instance/bs4/assets/images/blog/blog-post-thumb-6.jpg',
            title: 'Top 10 UX Tools for Developers',
            content: 'Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...',
            clock: <AiOutlineClockCircle/>,
            day: 'Mar 7, 2018',
            comment: <AiOutlineComment/>,
            number: '12 Comments'
        },
        {
            id: 6,
            images: 'https://themes.3rdwavemedia.com/instance/bs4/assets/images/blog/blog-post-thumb-7.jpg',
            title: 'The Future of Blockchain',
            content: 'Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...',
            clock: <AiOutlineClockCircle/>,
            day: 'Feb 26, 2018',
            comment: <AiOutlineComment/>,
            number: '16 Comments'
        },
        {
            id: 7,
            images: 'https://themes.3rdwavemedia.com/instance/bs4/assets/images/blog/blog-post-thumb-8.jpg',
            title: 'Coding Challenges',
            content: 'Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...',
            clock: <AiOutlineClockCircle/>,
            day: 'Feb 21, 2018',
            comment: <AiOutlineComment/>,
            number: '7 Comments'
        },
        {
            id: 8,
            images: 'https://themes.3rdwavemedia.com/instance/bs4/assets/images/blog/blog-post-thumb-9.jpg',
            title: 'How to become a digital nomad',
            content: 'Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...',
            clock: <AiOutlineClockCircle/>,
            day: 'Feb 8, 2018',
            comment: <AiOutlineComment/>,
            number: '7 Comments'
        },
        {
            id: 9,
            images: 'https://themes.3rdwavemedia.com/instance/bs4/assets/images/blog/blog-post-thumb-10.jpg',
            title: 'Best Meetups for Developers in London',
            content: 'Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...',
            clock: <AiOutlineClockCircle/>,
            day: 'Jan 12, 2018',
            comment: <AiOutlineComment/>,
            number: '14 Comments'
        },
    ]
    return(
        <>
            <BoxWrapper>
                <div className="wrapper">
                    <div className="container">
                        {
                            Data.map((item, array, index) => {
                                return(
                                    <Box key={item.id} item={item}/>
                                )
                            })
                        }
                    </div>
                <div className="loading">
                    <a href="#" className="link">Load more posts...</a>
                </div>
                </div>
            </BoxWrapper>
        </>
    )
}
export default Boxs