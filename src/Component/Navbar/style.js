import styled from "styled-components";
export const NavbarWrapper = styled.div`
.navbar{
    background-color: #0a71c6 !important;
}

.navbar-left{
    display: flex;
    .nav-link{
        max-width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 5px;
        color: #fff;
        font-size: 1.1rem;
        &:hover{
            background-color: #434e5e;
            border-radius: 50%;
            cursor: pointer;
        }
    }
}

.navbar-right{
    display: flex;
    justify-content: flex-end;
    font-weight: 400;
    padding: 1px 0px;
    .nav-link{
        margin: 0px 5px;
    }
    .fa-solid{
        margin-left: 5px;
    }
}
`;