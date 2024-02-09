import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Thomas Son</h1>
            <p>Développeur Web JavaScript.</p>
            <nav>
                <NavLink to="">Accueil</NavLink>
                <NavLink to="/a-propos">À propos</NavLink>
                <NavLink to="/mes-projets">Mes projets</NavLink>
                <NavLink to="/me-contacter">Me contacter</NavLink>
            </nav>
        </header>
    )
}

export default Header;