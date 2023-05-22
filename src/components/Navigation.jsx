import { Link } from "react-router-dom"
import Style from '../assets/scss/modules/Header/Navigation.module.scss'
import { useLocation } from 'react-router-dom'

export default function Navigation () {
    const location = useLocation()

    return (
        <nav className={Style.AppNavigation}>
            <ul>
                <li><Link to="/" className={location.pathname === `/` ? Style.active : ''}>Accueil</Link></li>
                <li><Link to="/about" className={location.pathname === `/about` ? Style.active : ''}>A Propos</Link></li>
            </ul>
        </nav>
    )
}