import axios from "axios";
import { useEffect, useState } from "react";

export const ThreadsList = () => {
    const [threadList, setThreadList] = useState([]);
    
    useEffect(() => {
        axios.get(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads`)
        .then(res => {
            setThreadList(res.data);
        })
    }, [])

    return (
        <>
            <h2>スレッド一覧</h2>
            <ul id="threadList">
                {threadList.map((thread) => {
                    return (
                        <li key={thread.id}>{thread.title}</li>
                    )
                })}
            </ul>
        </>
    )
}