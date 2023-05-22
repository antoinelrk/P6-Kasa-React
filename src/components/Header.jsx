import Menu from './Navigation.jsx'
import Logo from './Logo.jsx'
import Style from '../assets/scss/modules/Header/Header.module.scss'

function Header () {
    return (
        <header className={Style.Header}>
            <Logo />
            <Menu />
        </header>
    )
}

export default Header