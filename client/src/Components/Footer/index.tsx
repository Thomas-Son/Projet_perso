import { NavLink } from "react-router-dom";

import styles from "./footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <nav>
                <NavLink to="">Accueil</NavLink>
                <hr />
                <NavLink to="/a-propos">À propos</NavLink>
                <hr />
                <NavLink to="/mes-projets">Mes projets</NavLink>
                <hr />
                <NavLink to="/me-contacter">Me contacter</NavLink>
            </nav>
            <p>Thomas Son - 2024</p>
        </footer>
    )
}

export default Footer;