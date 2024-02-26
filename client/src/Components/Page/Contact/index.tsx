import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from "./contact.module.css"

function Contact() {
    return (
        <main className={styles.contact}>
            <div className={styles.ctn_border}>
                <div className={styles.ctn_bg}>
                    <h2>Mes contacts.</h2>

                    <div>
                        <article>
                            <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
                            <h3>Adresse</h3>
                            <p>Toulouse, France</p>
                        </article>
                    </div>
                    <hr />
                    <div>
                        <article>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                            <h3>Email</h3>
                            <a href="mailto: thomasson8131@gmail.com">thomasson8131@gmail.com</a>
                        </article>                
                    </div>
                    <hr />
                    <div>
                        <article>
                            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                            <h3>Telephone</h3>
                            <a href="tel: +33613017146">06.13.01.71.46</a>
                        </article>
                    </div>
                    <hr />
                    <div>
                        <article>
                            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                            <h3>Linkedin</h3>
                            <a target="_blank" href="https://www.linkedin.com/in/thomas-son/">linkedin.com/in/thomas-son</a>
                        </article>                
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Contact;