import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import {Accomodation} from './pages/Accomodation.jsx'
import Errors from './pages/Errors.jsx'
import { createBrowserRouter, json, Navigate } from "react-router-dom"

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/accomodation/:id",
        element: <Accomodation />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/404",
        element: <Errors />
    },
    {
        path: "/*",
        element: <Navigate to="/404" />
    }
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: routes
    }
]);

export default router
