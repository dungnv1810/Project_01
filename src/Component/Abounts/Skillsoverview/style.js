import styled from "styled-components";
export const SkillsOverviewWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 3rem 0;
    .skilltext{
        margin-bottom: 5rem;
        #text{
                color: #58677c;
            }
        a{
            text-decoration: none;
            color: #41A4F5;
            &:hover{
                color: #0c7fde;
                text-decoration: underline;
            }
        }
    }
    .skilloverview{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-evenly;
        padding: 0px 100px;
    }
`;