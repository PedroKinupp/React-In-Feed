import styles from './styles.module.css'
import CommentButton from '../CommentButton/index.tsx'
import Feedbacks from '../Feedbacks/index.tsx';

type feedback = {
    author: string
    time: number
    content: string
    likes: number
}
interface ICommentBoxProps{
    image: string;
    name: string;
    occupation: string;
    time: number;
    text1: string;
    text2: string;
    text3: string;
    feedbacks: feedback[]
}

export default function CommentBox(props: ICommentBoxProps){
    return(
        <div className={styles.container}>
            <div>
                <div className={styles.profile}>
                    <figure>
                        <img src={props.image} className={styles.profileimage}></img>
                    </figure>
                    <div className={styles.details}>
                        <h2>{props.name}</h2>
                        <h3>{props.occupation}</h3>
                    </div>
                </div>
                <h3>Publicado há {props.time}h</h3>
            </div>
            <section className={styles.info}>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
            </section>
            <form className={styles.forms}>
                <h4>Deixe seu Feedback</h4>
                <textarea className={styles.textarea}></textarea>
                <CommentButton/>
            </form>
            {props.feedbacks.map((feedback) =>
                <Feedbacks 
                    author={feedback.author} 
                    content={feedback.content}
                    likes={feedback.likes}
                    time={feedback.time}
                />
            )}
        </div>
    )
}