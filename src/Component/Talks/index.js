import React from "react";
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import Talk from "./Talk";
import Videos from "./Videos";
const Talks = () => {
    const data = [
        {
            id: 1,
            video: 'https://www.youtube.com/embed/RS36gBEp8OI?rel=0',
            title: 'YouTube Video Lorem Ipsum',
            clock: <AiOutlineClockCircle/>,
            videos: <BsFillCameraVideoFill/>,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean  massa. Cum sociis natoque penatibus penatibus et magnis dis parturient montes, nascetur ridiculus mus.. Find out more about the conference in my recent blog post.'
        },
        {
            id: 2,
            video: 'https://www.youtube.com/embed/aCZBC5rvT6Q?rel=0',
            title: 'YouTube Video Lorem Ipsum',
            clock: <AiOutlineClockCircle/>,
            videos: <BsFillCameraVideoFill/>,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean  massa. Cum sociis natoque penatibus penatibus et magnis dis parturient montes, nascetur ridiculus mus.. Find out more about the conference in my recent blog post.'
        },
        {
            id: 3,
            video: 'https://www.youtube.com/embed/RS36gBEp8OI?rel=0',
            title: 'YouTube Video Lorem Ipsum',
            clock: <AiOutlineClockCircle/>,
            videos: <BsFillCameraVideoFill/>,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean  massa. Cum sociis natoque penatibus penatibus et magnis dis parturient montes, nascetur ridiculus mus.. Find out more about the conference in my recent blog post.'
        },
    ]
    return(
        <React.Fragment>
            <Talk/>  
            {
                data.map((item, array, index) => {
                    return(
                        <Videos key={item.id} item={item}/>
                    )
                })
            }                
        </React.Fragment>
    )
}
export default Talks;