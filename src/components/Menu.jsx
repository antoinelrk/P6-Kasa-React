import { Link } from "react-router-dom"

export default function Menu () {
    return (
        <nav className='app-navigation'>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/about">A Propos</a></li>
            </ul>
        </nav>
    )
}