import React from "react";
import { TitleWrapper } from "./style";
import PropStyles from "prop-types"

const Title = (props) => {
    const {title} = props;
    return(
        <React.Fragment>
            <TitleWrapper>
                <h3>{title}</h3>
            </TitleWrapper>
        </React.Fragment>
    )
}

Title.prototype={

}

export default Title