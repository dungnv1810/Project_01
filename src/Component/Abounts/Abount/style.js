import styled from "styled-components";
 export const AbountWrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: #41a4f5;
    padding: 3rem 13rem;
    display: flex;
    align-items: flex-start;
    .images{
        margin-right: 3rem;
        img{
            max-width: 240px;
        }
    }
    .text{
        color: #fff;
        text-align: left;
        h5{
            font-weight: 300;
            font-size: 1.25rem;
        }
        h2{
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.2;
        }
        p{
            margin-bottom: 1rem;
            font-size: 1.1rem;
            a{
                text-decoration: none;
                &:hover{
                    text-decoration: underline;
            }
            }
            
        }
    }
 `;