import site_perso from "../../../assets/images/site_perso.png"
import styles from "./project.module.css"

function Project() {

    const projects = [
        {
            label: "Site Perso",
            img_url: site_perso,
            img_alt: "Capture du site présentation perso",
            content: "J'ai conçu ce site dans le but de me présenter et de présenter mes différents projets, afin de pouvoir les partager.",
            link: "https://thomas-son.online/",
        },
    ]

    return (
        <main className={styles.project}>
            <div className={styles.ctn_border}>
                <div className={styles.ctn_bg}>
                    <h2>Mes projets.</h2>
                    <p className={styles.intro}>Voici la liste des projets sur lesquels j'ai travaillé.</p>
                    
                    <div className={styles.projects}>
                        {projects.map((datas) =>
                            <article>
                                <h3>{datas.label}</h3>
                                <img src={datas.img_url} alt={datas.img_alt} />
                                <p>{datas.content}</p>
                                <a target="_blank" href={datas.link}>Lien vers le site</a>
                            </article>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Project;