import styled from "styled-components";
 export const Skillsoverviewitem = styled.div`
    width: calc((100% - 150px) /3);
    padding-bottom: 1.5rem;
    height: auto;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
    position: relative;
    h4{
        margin: 4rem 0 1rem 0;
        font-size: 1.25rem;
    }
    .icon{
        position: absolute;
        top: -40px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #41a4f5;
        color: #fff;
    }
    .content{
        width: 100%;
        text-align: left;
        margin-bottom: 1rem;
        padding-left: 2rem;
        .iconskill{
            margin-right: 10px;
            color: #41a4f5;
            font-size: 0.9rem;
        }
        .skill{
            margin-bottom: 2rem;
            line-height: 2rem;
            font-size: 1.2rem;
        }
    }
 `;