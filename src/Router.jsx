
// Pages
import Home from './pages/Home.jsx'
import APropos from './pages/APropos.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import { createBrowserRouter } from 'react-router-dom'

const routes = [
    {
        path: `/`,
        element: <Home />
    },
    {
        path: `a-propos`,
        element: <APropos />
    }
]

export default createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        children: routes
    }
])
