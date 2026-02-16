import styles from './styles.module.css'
import Logo from "../../assets/Logo1.svg";

export default function Header(){
    return(
        <header className={styles.header}>
            <figure>
                <img src={Logo} alt="Logo" />
            </figure>
            <h1> Feed</h1>
        </header>
    )
}