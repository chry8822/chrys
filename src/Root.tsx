import { RecoilRoot } from "recoil"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/main"

const Root = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="main" element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    )
};

export default Root
