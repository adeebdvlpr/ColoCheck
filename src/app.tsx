// my router + routes.....DELETE 
import HomePage from "./app/page"
import About from "./app/about/page"
import Assessment from "./app/assessment/page";
import News from "./app/news/page";
import Results from "./app/results/page";
import ScreenOptions from "./app/screenOptions/page";
import { BrowserRouter ,Route, Router, Routes, useNavigate } from "react-router-dom";

function App () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<HomePage />}/>
                <Route path = "/about" element={<About />}/>
                <Route path = "/assessment" element={<Assessment />} />
                <Route path = "/news" element={<News />}/>
                <Route path = "/results" element={<Results />}/>
                <Route path = "/screening-options" element={<ScreenOptions />}/>
            </Routes>
        </BrowserRouter>
    );
}