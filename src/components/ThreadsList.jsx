import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledThreadList = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;

    h2 {
        margin: 30px;
    }

    ul {
        max-width: 500px;
        width: 100%;
        list-style: none;
    }

    li {
        padding: 15px;
        border: 3px solid lightgreen;
        border-radius: 10px
    }

    li:not(:last-child) {
        margin-bottom: 15px;
    }
`;

export const ThreadsList = () => {
    const [threadList, setThreadList] = useState([]);
    
    useEffect(() => {
        axios.get(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads`)
        .then(res => {
            setThreadList(res.data);
        })
    }, [])

    return (
        <StyledThreadList>
            <h2>スレッド一覧</h2>
            <ul>
                {threadList.map((thread) => {
                    return (
                        <li key={thread.id}>{thread.title}</li>
                    )
                })}
            </ul>
        </StyledThreadList>
    )
}