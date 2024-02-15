import html5 from "../../../assets/images/html5.png"
import css3 from "../../../assets/images/css3.png"
import js from "../../../assets/images/js.png"
import ts from "../../../assets/images/ts.png"
import react from "../../../assets/images/react.png"
import express from "../../../assets/images/express.png"
import nodejs from "../../../assets/images/nodejs.png"
import mysql from "../../../assets/images/mysql.png"

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
            <h2>À propos de moi.</h2>
            <p>Je m'appelle Thomas Son, j'ai 27 ans et j'habite sur Toulouse.</p>
            <p>J'ai obtenu mon titre RNCP n°37273 de Développeur web full stack avec la 3W Academy en Janvier 2024.</p>
            <h3>Techno et Framework</h3>
            <p>Grâce à cette formation j'ai appris à utiliser différents technos et frameworks afin de concevoir des sites</p>

            <div className={styles.skills}>
                {skills.map((datas) =>
                    <article className={styles.skill}>
                        <img src={datas.img_url} alt={datas.img_alt} className={styles.logo} />
                        <h3>{datas.label}</h3>
                    </article>
                )}
            </div>

            <p>En construction !</p>
        </main>
    )
}

export default About;