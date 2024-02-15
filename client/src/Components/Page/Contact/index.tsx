import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from "./contact.module.css"

function Contact() {
    return (
        <main className={styles.contact}>
            <h2>Mes contacts.</h2>

            <div>
                <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
                <h3>Adresse</h3>
                <p>Toulouse, France</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <h3>Email</h3>
                <a href="mailto: thomasson8131@gmail.com">thomasson8131@gmail.com</a>
            </div>
            <div>
                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                <h3>Telephone</h3>
                <a href="tel: +33613017146">06.13.01.71.46</a>
            </div>
            <div>
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                <h3>Linkedin</h3>
                <a target="_blank" href="https://www.linkedin.com/in/thomas-son/">linkedin.com/in/thomas-son</a>
            </div>

        </main>
    )
}

export default Contact;