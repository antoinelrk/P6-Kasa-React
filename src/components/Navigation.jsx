import { Link } from "react-router-dom"
import Style from '../assets/scss/modules/Header/Navigation.module.scss'

export default function Navigation () {
    return (
        <nav className={Style.AppNavigation}>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">A Propos</Link></li>
            </ul>
        </nav>
    )
}