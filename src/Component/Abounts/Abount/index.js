import React from "react";
import { AbountWrapper } from "./style";
import Button from "../../Commont/Button";
import avata from '../../Assets/avata.jpg';
import PropStyles from 'prop-types'
const Abount = (props) =>{
    console.log('props === ', props)
    const handleRedirectToAbout = () => {
        
    }
    return(
        <React.Fragment>
            <AbountWrapper>
                <div className="images">
                    <img
                        alt="ảnh lỗi"
                        src={avata}
                    />
                </div>
                <div className="text">
                    <h5>Hello, my name is</h5>
                    <h2>Steve Doe</h2>
                    <p>
                        I'm a full-stack developer specialised in frontend and backend
                        development for complex scalable web apps. I write about web
                        development on <a href="#">my blog</a> and regularly <a href="#">speak</a> at various web conferences
                        and meetups. Want to know how I may help your project? Check out my
                        project <a href="#">case studies</a> and <a href="#">resume</a>.
                    </p>
                    <Button name="Hire Me" onClick={handleRedirectToAbout}/>
                </div>
            </AbountWrapper>
        </React.Fragment>
    )
}
Abount.prototype={

}
export default Abount;