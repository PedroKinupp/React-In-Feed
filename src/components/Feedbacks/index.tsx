import styles from './styles.module.css'
import like from "../../assets/like.png"

export default function Feedbacks(){
    return(
        <div className={styles.feedbacks}>
            <figure>
            </figure>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <h2>Felyppe Nunes</h2>
                        <h3>Cerca de 2h</h3>
                    </div>
                    <p>texto texto texto texto</p>
                </div>
                <div className={styles.like}>
                    <img src={like}></img>
                    <p>Like • {1+6}</p>
                </div>
            </div>
        </div>
    )
}