import site_perso from "../../../assets/images/site_perso.png"
import olympien from "../../../assets/images/olympien.png"
import paradis_dasie from "../../../assets/images/no-photo.webp" 

import styles from "./project.module.css"

function Project() {

    const projects = [
        {
            label: "Paradis d'asie",
            img_url: paradis_dasie,
            img_alt: "Pas de photo",
            content: "Conception d'un site vitrine pour le restaurant Paradis d'asie. En construction.",
            link: "",
        },
        {
            label: "Site personnel",
            img_url: site_perso,
            img_alt: "Capture du site présentation personnel",
            content: "J'ai conçu ce site dans le but de me présenter et de partager mes différents projets.",
            link: "https://thomas-son.online/",
        },
        {
            label: "Olympien",
            img_url: olympien,
            img_alt: "Capture du site olympien",
            content: "Projet que j'ai présenté lors de ma soutenance. J'ai conçu ce site entièrement de la partie front à la partie back avec une base de données et une gestion des données avec un compte administrateur.",
            link: "",
        }
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
                                {
                                    !datas.link ? <p></p> : <a target="_blank" href={datas.link}>Lien vers le site</a>
                                }
                            </article>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Project;