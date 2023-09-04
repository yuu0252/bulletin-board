import { Route, Routes } from "react-router-dom"
import { Threads } from "./Threads"
import { CreateThread } from "./CreateThread"
import { Posts } from "./Posts"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Threads />} />
            <Route path="/thread/new" element={<CreateThread />} />
            <Route path="/thread/:id" element={<Posts />} />
        </Routes>
    )
}