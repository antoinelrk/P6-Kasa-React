
// Pages
import Home from './pages/Home.jsx'
import APropos from './pages/APropos.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Accomodation from './pages/Accomodation.jsx'
import { createBrowserRouter } from 'react-router-dom'

const routes = [
    {
        path: `/`,
        element: <Home />
    },
    {
        path: `a-propos`,
        element: <APropos />
    },
    {
        path: `accomodation/:id`,
        element: <Accomodation />
    }
]

export default createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        children: routes
    }
])
