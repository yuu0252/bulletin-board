import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: lightgreen;
    padding: 0 30px;
`;

const StyledLink = styled(Link)`
    color: #fff;
    font-weight: bold;
    text-decoration: none;
`;

export const Header = () => {
    return (
        <StyledHeader>
            <h1><StyledLink to="/">掲示板</StyledLink></h1>
            <StyledLink to="/thread/new">スレッドを立てる</StyledLink>
        </StyledHeader>
    )
}