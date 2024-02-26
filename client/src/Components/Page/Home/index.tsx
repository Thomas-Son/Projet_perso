import { NavLink } from "react-router-dom";

import memoji from "../../../assets/images/memoji.png"
import styles from "./home.module.css"

function Home() {
    return (
        <main className={styles.home}>
            <div className={styles.ctn_border}>
                <div className={styles.ctn_bg}>
                    <h2>Bienvenue !</h2>

                    <img src={memoji} alt="Photo de Thomas Son" className={styles.photo} />

                    <article className={styles.intro}>
                        <h3>Développeur Web</h3>
                        <p>Je m'appelle Thomas Son, j'ai 27 ans. Je suis développeur web à Toulouse.</p>
                        <p>J'ai appris à coder durant ma formation de Développeur full stack avec la 3W Academy.</p>
                        <p>Je vous laisse naviguer sur mon site pour en apprendre un peu plus sur moi et  pour découvrir mes projets passés et actuels.</p>
                    </article>

                    <article className={styles.ctn_projects}>
                        <h3>Mes Projets</h3>
                        <ul>
                            <li>Paradis d'asie</li>
                            <li>Site personnel</li>
                            <li>Olympien</li>
                        </ul>
                        <NavLink to="/mes-projets">En savoir plus</NavLink>
                    </article>

                    <article>
                        <h3>Vous souhaitez me contacter ?</h3>
                        <NavLink to="/me-contacter">C'est par ici !</NavLink>
                    </article>
                </div>
            </div>
        </main>
    )
}

export default Home;