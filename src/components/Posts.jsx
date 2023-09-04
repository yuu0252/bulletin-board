import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { PostDetail } from "./PostDetail";
import { CreatePost } from "./CreatePost";

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
    margin: 0 30px;
`;

const StyledPosts = styled.section`
    width: 100%;
    max-width: 800px;

    h2 {
        margin: 30px 0;
    }

    ul {

        li {
            text-align: center;
            padding: 15px;
            border: 3px solid lightgreen;
            border-radius: 10px;
            list-style: none;
    
            &:not(:last-child) {
                margin-bottom: 15px;
            }
        }
    }
`;

export const Posts = (props) => {
    const { id } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const title = query.get("title");
    return (
        <StyledContainer>
            <StyledPosts>
                <h2>{title}</h2>
                <ul>
                    <PostDetail id={id} />
                </ul>
            </StyledPosts>
            <CreatePost id={id}/>
        </StyledContainer>
    )
}