import { NavLink } from "react-router-dom";

import styles from "./header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.titre}>
                <h1>Thomas Son</h1>
                <p>Développeur Web</p>
            </div>            

            <nav>
                <NavLink to="">Accueil</NavLink>
                <hr />
                <NavLink to="/a-propos">À propos</NavLink>
                <hr />
                <NavLink to="/mes-projets">Mes projets</NavLink>
                <hr />
                <NavLink to="/me-contacter">Me contacter</NavLink>
            </nav>
        </header>
    )
}

export default Header;