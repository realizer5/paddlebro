import { Route, Routes } from "react-router";
import { Home, Login, Signup } from "./pages";
import Navbar from "./components/Navbar";

function App() {

    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    )
}

export default App
