import styled from "styled-components";
import { ThreadsList } from "./ThreadsList";

const StyledThreads = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;

    h2 {
        margin: 30px;
    }
`;

export const Threads = () => {
    
    return (
        <StyledThreads>
            <h2>スレッド一覧</h2>
            <ThreadsList />
        </StyledThreads>
    )
}