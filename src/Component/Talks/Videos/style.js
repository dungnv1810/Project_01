import styled from "styled-components";
export const VideoWrapper = styled.div`
    width: 100%;
    .wrapper{
        width: 100%;
        max-width: 1110px;
        margin: 3rem auto;
        display: flex;
        justify-content: space-between;
        background-color: #ffffff;
        box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
    }
    .video{
        width: 60%;
        height: 350px;
        position: relative;
        padding-right: 16px;
        .embed-responsive-item{
            width: 100%;
            height: 100%;
        }
    }
    .content{
        width: 40%;
        padding: 24px;
        text-align: left;
        h4{
            font-weight: 500;
            line-height: 1.2;
            margin-bottom: 0.5rem;
            padding: 0;
        }
        .list{
            color: #aab4c3;
            font-size: 1rem;
            margin-bottom: 0.5rem;
            list-style: none;
            padding: 0;
            display: flex;
            .list-item{
                display: flex;
                align-items: center;
                margin-right: 1.5rem;
            }
            span{
                margin-left: 5px;
            }
        }
        .title{
            color: #434E5E;
            font-size: 1rem;
        }
    }
`;