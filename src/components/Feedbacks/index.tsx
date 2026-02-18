import styles from './styles.module.css'

export default function Feedbacks(){
    return(
        <div className={styles.feedbacks}>
            <figure>
            </figure>
            <div>
                <div className={styles.content}>
                    <div>
                        <h2>Felyppe Nunes</h2>
                        <h3>Cerca de 2h</h3>
                    </div>
                    <p>texto texto texto texto</p>
                </div>
                <div className={styles.like}>
                    <image></image>
                    <h3>like</h3>
                </div>
            </div>
        </div>
    )
}