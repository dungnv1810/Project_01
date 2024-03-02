import React from "react";
import Title from "../../Title";
import { LogoItemWrapper } from "./style";
const LogoItem = () =>{
    return(
        <React.Fragment>
            <LogoItemWrapper>
                <div className="container-fluid">
                    <Title title="Great clients I've worked with"/>
                    <div className="container padding">
                    <div className="row text-center padding">
                        <div className="col-xs-12 col-sm-6 col-md-2">
                            <a href="#" className="faCoffee">
                                <img className="img-fluid svg-ie-fix image" src="https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-1.svg" alt="ảnh lỗi"/>
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-2">
                            <a href="#" className="faCoffee">
                                <img className="img-fluid svg-ie-fix image" src="https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-2.svg" alt="ảnh lỗi"/>
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-2">
                            <a href="#" className="faGift">
                                <img className="img-fluid svg-ie-fix image" src="https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-3.svg" alt="ảnh lỗi"/>
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-2">
                            <a href="#" className="faGift">
                                <img className="img-fluid svg-ie-fix image" src="https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-4.svg" alt="ảnh lỗi"/>
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-2">
                            <a href="#" className="faGift">
                                <img className="img-fluid svg-ie-fix image" src="https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-5.svg" alt="ảnh lỗi"/>
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-2">
                            <a href="#" className="faGift">
                                <img className="img-fluid svg-ie-fix image" src="https://themes.3rdwavemedia.com/instance/bs4/assets/images/logos/logo-6.svg" alt="ảnh lỗi"/>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </LogoItemWrapper>
        </React.Fragment>
    )
}
export default LogoItem;