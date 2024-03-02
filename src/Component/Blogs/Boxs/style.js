import styled from "styled-components";
export const BoxWrapper = styled.div`
    width: 100%;
    .wrapper{
        width: 1110px;
        margin: 0px auto;
        .container{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0;
        }
    }
    .loading{
        width: 100%;
        background-color: #41A4F5;
        margin-bottom: 3rem;
        border-radius: 4px;
        font-size: 1.1rem;
        .link{
            display: block;
            padding: 1rem;
            cursor: pointer;
            color: #fff;
            font-weight: 700;
            text-decoration: none;
        }
    }
` 