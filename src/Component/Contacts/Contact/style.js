import styled from "styled-components";
export const ContactWrapper = styled.div`
    width: 100%;
    margin: 3rem 0rem;
    .wrapper{
        width: 1110px;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        .inner{
            width: 80px;
            height: 80px;
            margin-bottom: 16px;
            .images{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }
        .container{
            padding: 0;
            width: 730px;
            .contact-form{
                h3{
                    margin-bottom: 1rem;
                    font-weight: 500rem;
                    font-size: 1.75rem;
                    line-height: 1.2;
                    margin-bottom: 1rem;
                }
                .form{
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .input{
                        width: calc((100% - 10px) / 2);
                        input{
                            outline: none;
                            display: block;
                            width: 100%;
                            height: calc(1.5em + 0.75rem + 2px);
                            padding: 0.375rem 0.75rem;
                            font-size: 1rem;
                            font-weight: 400;
                            line-height: 1.5;
                            color: #6f8098;
                            background-color: #fff;
                            background-clip: padding-box;
                            border: 1px solid #b9c1cd;
                            border-radius: 0.25rem;
                            transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
                        }
                    } 
                }
                .message{
                    width: 100%;
                    margin-bottom: 1rem;
                    textarea{
                        border-color: #41A4F5;
                        outline: none;
                        display: block;
                        width: 100%;
                        padding: 0.375rem 0.75rem;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 1.5;
                        color: #6f8098;
                        background-color: #fff;
                        background-clip: padding-box;
                        border: 1px solid #b9c1cd;
                        border-radius: 0.25rem;
                        transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
                    }
                }
                .sendit{
                    .btn{
                        width: 100%;
                        cursor: pointer;
                        font-weight: 500;
                        padding: 0.375rem 1rem;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        display: block;
                        color: #fff;
                        background-color: #41A4F5;
                    }
                }
            }

        }
        .speech-bubble{
            position: relative;
            padding: 3rem;
            height: auto;
            margin-bottom: 3rem;
            background-color: #fff;
            box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
            &::before{
                content: "";
                display: block;
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 10px solid #fff;
                position: absolute;
                top: -10px;
                left: 50%;
                margin-left: -10px;

            }
            p{
                text-align: left;
                margin-bottom: 1rem;
                font-weight: 500;
                line-height: 1.5;
            }
            h6{
                margin-bottom: 1rem;
                font-weight: 700;
            }
            .list{
                padding: 0;
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                .item{
                    list-style: none;
                    margin-right: 0.5rem;
                    cursor: pointer;
                    .link{
                        width: 36px;
                        height: 36px;
                        display: block;
                        background: rgba(0,0,0,0.1);
                        font-size: 1.5rem;
                        border-radius: 4px;
                        transition: all 0.4s ease-in-out;
                        &:hover{
                            background: rgba(0,0,0,0.2);
                        }
                        .icon{
                            color: #fff;
                            line-height: 36px;
                            position: relative;
                            top: -4px
                        }
                    }
                }
            }
        }
    }
`;