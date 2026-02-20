import styles from './styles.module.css'
import LikeButton from '../Like'
import trashIcon from '../../assets/trashIcon.png'

type feedback = {
    id: number
    image: string
    author: string
    time: number
    content: string
    likes: number
}
interface Ifeedbacks{
    id: number
    image: string
    author: string
    time: number
    content: string
    likes: number
    fb: feedback[]
    setFb: (fb: feedback[]) => void
}
export default function Feedbacks(props : Ifeedbacks){
    function handleDelete(){
            props.setFb(props.fb.filter(item => item.id !== props.id))
    }

    return(
        <div className={styles.feedbacks}>
            <figure>
                <img src={props.image}/>
            </figure>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <div className={styles.head}>
                            <h2>{props.author}</h2>
                            <h3>Cerca de {props.time}h</h3>
                        </div>
                        <button 
                            className={styles.delete}
                            onClick={handleDelete}
                            >
                                <img src={trashIcon}/>
                        </button>  
                    </div>
                    <p>{props.content}</p>
                </div>
                <LikeButton likes={props.likes}/>
            </div>
        </div>
    )
}