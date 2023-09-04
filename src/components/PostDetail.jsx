import { useState, useEffect } from "react";
import axios from "axios";

export const PostDetail = (props) => {
    const { id } = props;
    const [threadDetail, setThreadDetail] = useState([]);

    useEffect(() => {
        axios.get(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts`)
        .then(res => {
            setThreadDetail(res.data.posts);
        })
        .catch(err => {
            console.log(err);
        })
        // eslint-disable-next-line
    }, [threadDetail]);

    return (
        <>
            {threadDetail.map((content) => {
                return (
                    <li key={content.id}>{content.post}</li>
                )
            })}
        </>
    )
}