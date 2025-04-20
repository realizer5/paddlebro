import { Route, Routes } from "react-router";
import { Home, Login, Signup, Services, BookNow, AboutUs, Contact } from "./pages";
import { Navbar } from "./components";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {

    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/book-now" element={<BookNow />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App
