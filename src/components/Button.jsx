import styled from "styled-components";

const StyledButton = styled.button`
    max-width: 100px;
    color: gray;
    font-size: 16px;
    font-weight: bold;
    padding: 5px 15px;
    background-color: transparent;
    border: 2px solid lightgreen;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px gray;
    transition: transform .3s;

    &:hover {
        color: #fff;
        background-color: lightgreen;
    }

    &:active {
        transform: translate(1px, 1px);
        box-shadow: none;
    }
`

export const Button = (props)=> {
    const { children, onClick } = props;
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
}