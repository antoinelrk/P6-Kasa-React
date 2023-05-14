import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import {Accomodation} from './pages/Accomodation.jsx'
import Errors from './pages/Errors.jsx'

import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <Errors />,
    },
    {
        path: "/accomodation/:id",
        element: <Accomodation />
    },
    {
        path: "/about",
        element: <About />
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
