import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Input } from "./Input";
import { Link } from "react-router-dom";
import { Button } from "./Button";

const StyledCreateThread = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    h2 {
        margin-bottom: 30px;
    }

    a {
        margin-top: 30px;
    }

    button {
        margin-top: 30px;
    }
`

export const CreateThread = () => {
    const [inputText, setInputText] = useState("");
    const [statusText, setStatusText] = useState("");
    const onChangeInput = (event) => {
        setInputText(event.target.value);
    }

    const onClickCreate = () => {
        if(inputText === "") {
            alert("スレッドタイトルを入力してください。");
            return;
        }
        axios.post("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads", {
            title: inputText
        })
        .then(() => {
            setStatusText("スレッドを作成しました。")
            setInputText("");
        })
        .catch(() => {
            setStatusText("スレッド作成に失敗しました。")
        })
    }

    return (
        <StyledCreateThread>
            <h2>スレッド新規作成</h2>
            <Input placeholder="スレッドタイトルを入力してください。" onChange={onChangeInput} inputText={inputText} />
            <Button onClick={onClickCreate}>作成</Button>
            <p>{statusText}</p>
            <Link to="/">Topへ戻る</Link>
        </StyledCreateThread>
    )
}