import styled from "styled-components";

export const Boxstyle = styled.div`
    width: calc((100% - 150px) / 3);
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    margin: 2.5rem 0;
    .text{
        padding: 20px 0px 0px 30px;
        text-align: left;
    }
    .bg{
        width: 100%;
        background-image: url(${(props)=>props.image_work});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 233px;
        position: relative;
        overflow: hidden;
        z-index: 3;
        &::after {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            content: "";
            position: absolute;
            top: 0;
            left: 0;
        }
        &::before{
            content: "";
            top: 0;
            left: 0;
            position: absolute;
            background-image: url(${(props)=>props.image_logo});
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: center center;
            z-index: 3;
        }
        .text{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 100%;
            left: 0;
            background: rgba(12,127,222,0.95);
            transition: 0.3s;
            z-index: 4;
            color: #fff;
            cursor: pointer;
            opacity: 0.9;
        }
        &:hover > .text{
            top: 0;
        }
    }
    .card-foodter {
        background-color: #ffffff;
        padding: 1.25rem 0 0.6rem 0 ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    .title-card {
        font-size: 1.125rem;
        color: #434e5e;
        cursor: pointer;
        font-weight: 600;
        &:hover {
            text-decoration: underline;
        }
    }
    .list-card {
        display: flex;
        padding: 5px 20px 0px;
        display: flex;
        justify-content: space-between;
      .card {
        background-color: #58677c;
        color: #fff;
        font-weight: 700;
        text-align: center;
        font-size: 70%;
        line-height: 1;
        padding: 0.35em 0.7em;
        padding-bottom: 0.4em;
        border-radius: 10rem;
        margin: 0px 4px;
      }
    }
  }

`;