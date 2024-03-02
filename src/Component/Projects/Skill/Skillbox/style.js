import styled from "styled-components";
export const SkillBoxWrapper = styled.div`
     .card{
        box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
    }
    .inner{
        width: 100%;
        background-image: url(${(props) => props.image_work});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 233px;
        overflow: hidden;
        position: relative;
        z-index: 3;
        &::after{
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            content: "";
            top: 0;
            left: 0;
            position: absolute;
            z-index: 3;
        }
        &::before{
            width: 100%;
            height: 100%;
            content: "";
            top: 0;
            left: 0;
            z-index: 4;
            position: absolute;
            background-image: url(${(props) => props.image_logo});
            background-position: center center;
            background-repeat: no-repeat;
        }
        .text{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 100%;
            left: 0;
            background: rgba(12,127,222,0.95);
            opacity: 0.9;
            transition: 0.4s;
            z-index: 5;
            color: #fff;
            cursor: pointer;
            text-align: left;
            padding: 20px 0px 0px 30px;
        }
        &:hover > .text{
            top: 0;
        }
    }
    .card-body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .card-title{
            font-size: 1.125rem;
            
            &:hover{
                text-decoration: underline;
                cursor: pointer;
            }
            a{
                color: #434E5E;
            }
        }
        .list-card{
            display: flex;
            padding: 15px 20px 0px;
            display: flex;
            justify-content: space-between;
            .card{
                background-color: #58677c;
                color: #ffffff;
                font-weight: 700;
                line-height: 1;
                text-align: center;
                font-size: 75%;
                padding: 0.35em 0.7em;
                padding-bottom: 0.4em;
                border-radius: 10rem;
                margin-right: 0.5rem;
            }
        }
    }
`;