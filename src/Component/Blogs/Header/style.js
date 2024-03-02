import styled from "styled-components";
export const BlogWrapper = styled.div`
    width: 100%;
    padding: 3rem;
    background-color: #41A4F5;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    .wrapper{
        width: 100%;
        max-width: 1110px;
        height: auto;
        margin: 0px auto;
        display: flex;
        justify-content: space-between;
        .images{
            width: 160px;
            height: 160px;
            border-radius: 50%;
            margin-right: 16px;
        }
        .content{
            flex: 1;
            text-align: left;
            .title{
                font-weight: bold;
                font-size: 2rem;
                line-height: 1.2;
                margin-bottom: 0.5rem;
            }
        }
        .noidung{
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }
        .list{
            display: flex;
            padding: 0;
            .item{
                list-style: none;
                margin-right: 0.5rem;
                cursor: pointer;
                .link{
                    width: 36px;
                    height: 36px;
                    display: inline-block;
                    background: rgba(0,0,0,0.1);
                    text-align: center;
                    font-size: 1.5rem;
                    border-radius: 4px;
                    transition: all 0.4s ease-in-out;
                    &:hover{
                        background: rgba(0,0,0,0.2);
                    }
                    .icon{
                        color: #fff;
                        position: relative;
                        top: -2px
                    }
                }
            }

        }
    }
`