import styles from './styles.module.css'
import CommentButton from '../CommentButton/index.tsx'

export default function CommentBox(){
    return(
        <div className={styles.container}>
            <div>
                <div>
                    <figure>
                        <image/>
                    </figure>
                    <div className={styles.details}>
                        <h2>Thaís Gomes</h2>
                        <h3>designer</h3>
                    </div>
                </div>
                <h3>Publicado há 1h</h3>
            </div>
            <section className={styles.info}>
                <p>Lorem ipsum</p>
                <p>dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. 
                </p>
                <p>Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!</p>
            </section>
            <form>
                <h3>Deixe seu Feedback</h3>
                <textarea className={styles.textarea}></textarea>
                <CommentButton/>
            </form>
        </div>
    )
}