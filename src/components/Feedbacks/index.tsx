import styles from './styles.module.css'
import LikeButton from '../Like'

interface Ifeedbacks{
    image: string
    author: string
    time: number
    content: string
    likes: number
}
export default function Feedbacks({image, author, time, content, likes} : Ifeedbacks){
    return(
        <div className={styles.feedbacks}>
            <figure>
                <img src={image}/>
            </figure>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <h2>{author}</h2>
                        <h3>Cerca de {time}h</h3>
                    </div>
                    <p>{content}</p>
                </div>
                <LikeButton likes={likes}/>
            </div>
        </div>
    )
}