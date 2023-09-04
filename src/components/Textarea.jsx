import styled from "styled-components";

const StyledTextarea = styled.textarea`
    max-width: 300px;
    padding: 15px;
    border: 2px solid lightgreen;
    border-radius: 5px;

    &:focus {
        outline: none;
    }
`;

export const Textarea = (props) => {
    const { placeholder, onChange, inputText } = props;

    return (
        <StyledTextarea onChange={onChange} placeholder={placeholder} value={inputText} />
    )
}