import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './Components/Navbar.jsx';
import './Components/Navbar.css';


{/* fix this to hhelp us make a route map so we can navigate throughout the tabs */}
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);

