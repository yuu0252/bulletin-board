import { useState } from "react";
import axios from "axios";
import { Button } from "./Button"
import styled from "styled-components";
import { Textarea } from "./Textarea";

const StyledCreatePost = styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 30px;
    margin-top: 30px;
`;

export const CreatePost = (props) => {
    const { id } = props;

    const [inputText, setInputText] = useState("");
    const [statusText, setStatusText] = useState("");
    
    const onChangeInput = (event) => {
        setInputText(event.target.value);
    }

    const onClickCreatePost = () => {
        if(inputText === "") {
            alert("内容を入力してください。");
            return;
        }
        axios.post(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts`, {
            post: inputText
        })
        .then(() => {
            setStatusText("投稿しました。")
            setInputText("");
        })
        .catch(() => {
            setStatusText("投稿に失敗しました。");
        });
    }

    return (
        <StyledCreatePost>
            <Textarea placeholder="投稿内容を入力" onChange={onChangeInput} inputText={inputText} />
            <Button onClick={onClickCreatePost}>投稿</Button> 
            <p>{statusText}</p>
        </StyledCreatePost>
    )
}