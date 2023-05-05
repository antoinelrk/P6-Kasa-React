import Home from './pages/Home.jsx'
import APropos from './pages/APropos.jsx'

const routesList = [
    {
        path: `/`,
        element: <Home />
    },
    {
        path: `a-propos`,
        element: <APropos />
    }
]

export default routesList