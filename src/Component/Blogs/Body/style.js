import styled from "styled-components";
const images = 'https://themes.3rdwavemedia.com/instance/bs4/assets/images/blog/blog-post-thumb-1.jpg'
export const BodyWrapper = styled.div`
    width: 100%;
    padding: 3rem 0px;
    .wrapper{
        width: 1110px;
        margin: 0px auto;
        display: flex;
        justify-content: center;
        background-color: #fff;
        box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
        .images{
            position: relative;
            width: 60%;
            height: 350px;
            position: relative;
            padding-right: 16px;
            background-image: url(${images});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            span{
                position: absolute;
                top: 15px;
                left: 15px;
                background-color: #28a745;
                color: #fff;
                border-radius: 4px;
                cursor: pointer;
                padding: 5px 10px;
                font-size: 1rem;
                letter-spacing: 1px;
                font-weight: 500;
            }
        }
        .content{
            width: 40%;
            text-align: left;
            padding: 1rem;
            .title{
                font-size: 1.25rem;
                margin-bottom:  0.5rem;
                font-weight: 500;
                line-height: 1.2;
            }
            .card-text{
                .excerpt{
                    margin-bottom: 1rem;
                    color: #434E5E
                }
                .btn{
                    color: #fff;
                    background-color: #41A4F5;
                    border-color: #41A4F5;
                    cursor: pointer;
                    font-weight: 500;
                    padding: 0.375rem 1rem;
                }
            }
        }
    }
`