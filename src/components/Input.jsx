import styled from "styled-components";

const StyledInput = styled.input`
    max-width: 300px;
    padding: 15px;
    border: 2px solid lightgreen;
    border-radius: 5px;

    &:focus {
        outline: none;
    }
`;

export const Input = (props) => {
    const { placeholder, onChange, inputText } = props;

    return (
        <StyledInput onChange={onChange} placeholder={placeholder} value={inputText} />
    )
}