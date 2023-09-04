import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledThreadsList = styled.ul`
    max-width: 500px;
    width: 100%;
    list-style: none;

    li {
        text-align: center;
        padding: 15px;
        border: 3px solid lightgreen;
        border-radius: 10px;

        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
`;

export const ThreadsList = () => {
    const [threadsList, setThreadsList] = useState([]);
    
    useEffect(() => {
        axios.get(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads`)
        .then(res => {
            setThreadsList(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <StyledThreadsList>
            {threadsList.map((thread) => {
                return (
                    <li key={thread.id} id={thread.id}><StyledLink to={"/thread/" + thread.id + "?title=" + thread.title}>{thread.title}</StyledLink></li>
                )
            })}
        </StyledThreadsList>
    )
}