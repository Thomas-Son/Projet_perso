import styles from "./home.module.css"

function Home() {
    return (
        <main className={styles.home}>
            <h2>Bienvenue sur mon site.</h2>
            <article>
                <h3>Développeur Web sur Toulouse</h3>
                <p>Je m'appelle Thomas Son, j'ai 27 ans. Je suis développeur web.</p>
                <p>En construction !</p>
            </article>
            <article>
                <h3>Mes Projets</h3>
                <p>Pour en savoir plus sur mes projets</p>
            </article>
            <article>
                <h3>Vous souhaitez me contacter ?</h3>
            </article>
        </main>
    )
}

export default Home;