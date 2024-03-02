import React from "react";
import PropStyles from 'prop-types';
import { ButtonWrapper } from "./style";

const Button = (props) =>{
    const {name, onClick} = props;
    return(
        <React.Fragment>
            <ButtonWrapper onClick={onClick}>
                {name}
            </ButtonWrapper>
        </React.Fragment>
    )
}

Button.prototype={
    name: PropStyles.string.isRequired,
    onClick: PropStyles.func.isRequired
}
export default Button;