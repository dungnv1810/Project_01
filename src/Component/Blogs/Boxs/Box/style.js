import styled from "styled-components";
export const BoxWrapper = styled.div`
    width: calc((100% - 60px) / 3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 3rem;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
    .inner{
        position: relative;
        width: 100%;
        overflow: hidden;
        .images{
            width: 100%;
            height: 100%;
            transition: all 1.5s ease;;
        }
        &:hover .images{
            transform: scale(1.1);
        }
        .opacity{
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0,0,0,0.4);
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: all 0.8s ease-in-out;
        }
        .btn-readmore{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 6px 10px;
            color: #fff;
            background-color: #41A4F5;
            border-color: #41A4F5;
            font-weight: 500;
            opacity: 0;
            border-radius: 4px;
            border: none;
        }
        &:hover .opacity, 
        &:hover .btn-readmore{
            opacity: 1;
        }
    }   
    .body{
        padding: 20px;
        text-align: left;
        background-color: #fff;
        flex: 1;
        .title{
            font-size: 1.3rem;
            margin-bottom: 0.5;
            font-weight: 500;
            line-height: 1.2;
            .title-link{
                color: #41A4F5;
                text-decoration: none;
                background-color: transparent;
                &:hover{
                    color: #0c7fde;
                    text-decoration: underline;
                }
            }
        }
    }
    .button{
        padding: 0.75rem 1.25rem;
        background-color: rgba(0,0,0,0.03);
        text-align: left;
        .list{
            margin: 0;
            padding: 0;
            display: flex;
            .item{
                list-style: none;
                margin-right: 20px;
                display: flex;
                align-items: center;
                font-size: 1.1rem;
                span{
                    margin-left: 5px;
                    font-size: 1rem;
                }
            }
        }
    }
`