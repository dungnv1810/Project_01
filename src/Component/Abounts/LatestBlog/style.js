import styled from "styled-components";
export const LatestBlogWrapper = styled.div`
    width: 100%;
    .container{
        margin-top: 5rem;
    }
    .row{
        margin-top: 3rem;
    }
    .shadow-sm{
        box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
    }
    .mb-5{
        margin-bottom: 3rem;
    }
    .inner{
        overflow: hidden;
        img{
            transition: all 1.5s ease;
        }
        &:hover img{
            transform: scale(1.2);
        }
    }
    .card-title{
        font-size: 1.25rem;
    }
    .text-truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .mb-2{
        margin-bottom: 0.5rem;
    }
    h4{
        line-height: 1.5;
        font-weight: 500;
    }
    .meta{
        color: #aab4c3;
        font-size: 0.875rem;
    }
    .mb-1{
        margin-bottom: 0.25rem;
        a{
            color: #aab4c3;
        }
    }
`;