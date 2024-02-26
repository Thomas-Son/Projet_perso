import { NavLink } from "react-router-dom";

import html5 from "../../../assets/images/html5.png"
import css3 from "../../../assets/images/css3.png"
import js from "../../../assets/images/js.png"
import ts from "../../../assets/images/ts.png"
import react from "../../../assets/images/react.png"
import express from "../../../assets/images/express.png"
import nodejs from "../../../assets/images/nodejs.png"
import mysql from "../../../assets/images/mysql.png"

import photo from "../../../assets/images/photo.png"
import styles from "./about.module.css"

function About() {

    const skills = [
        {
            label: "HTML5",
            img_url: html5,
            img_alt: "logo HTML5",
        },
        {
            label: "CSS3",
            img_url: css3,
            img_alt: "logo CSS3",
        },
        {
            label: "JavaScript",
            img_url: js,
            img_alt: "logo JavaScript",
        },
        {
            label: "TypeScript",
            img_url: ts,
            img_alt: "logo TypeScript",
        },
        {
            label: "React",
            img_url: react,
            img_alt: "logo React",
        },
        {
            label: "NodeJS",
            img_url: nodejs,
            img_alt: "logo NodeJS",
        },
        {
            label: "ExpressJS",
            img_url: express,
            img_alt: "logo ExpressJS",
        },
        {
            label: "MySQL",
            img_url: mysql,
            img_alt: "logo MySQL",
        },
    ]

    return (
        <main className={styles.about}>
            <div className={styles.ctn_border}>
                <div className={styles.ctn_bg}>
                    <h2>À propos de moi.</h2>

                    <img src={photo} alt="Photo de Thomas Son" className={styles.photo}/>

                    <article className={styles.me}>
                        <h3>Je m'appelle Thomas Son.</h3>
                        <p> J'ai 27 ans et j'habite à Toulouse.</p>
                        <p>Je suis actuellement à la recherche d'un poste de développeur web.</p>
                    </article>

                    <article className={styles.cv}>
                        <h3>Mon parcours</h3>
                        <p>Après avoir obtenu mon bac S, j'ai poursuivi mes études dans le domaine de la chimie. Désireux de changer de voie, j'ai commencé à travailler en tant que préparateur de commandes. Rapidement, j'ai su gagner la confiance de mes supérieurs et évoluer sur le poste de responsable adjoint au sein de l'équipe de livraison à domicile.</p>

                        <p>Ayant toujours eu un interêt particulier pour l'informatique, et notamment le codage, j'ai décidé de commencer une formation de développeur web avec la 3W Academy.</p>

                        <p>C'est là que j'ai obtenu mon titre RNCP de Développeur web full stack en Janvier 2024.</p>
                    </article>

                    <article className={styles.tech}>
                        <h3>Techno et Framework</h3>

                        <p>Grâce à cette formation j'ai appris à utiliser différents technos et frameworks afin de concevoir des sites.</p>

                        <div className={styles.skills}>
                            {skills.map((datas) =>
                                <div className={styles.skill}>
                                    <img src={datas.img_url} alt={datas.img_alt} className={styles.logo} />
                                    <h3>{datas.label}</h3>
                                </div>
                            )}
                        </div>
                    </article>

                    <article className={styles.more}>
                        <h3>Mais aussi . . .</h3>
                        <p>Je suis un passionné de sport en particulier l'athlétisme que je pratique depuis le lycée. Dans ce sport j'aime les défis, chercher à se surpasser, se donner à 100% à chaque entrainement afin de voir les résultats lors des compétitions.</p>

                        <p>De nature curieux, j'aime également voyager afin de découvrir de nouvelles cultures et de goûter à de nouvelles saveurs.</p>

                        <p>Je suis quelqu'un de motivé et enthousiaste. Sociable, je m'adapte facilement à mon nouvel environnement.</p>

                        <p>C'est pourquoi si mon profil vous intéresse :</p>
                        <NavLink to="/me-contacter">Vous pouvez me contacter ici.</NavLink>
                    </article>
                </div>
            </div>
        </main>
    )
}

export default About;