import styles from './styles.module.css'
import Feedbacks from '../Feedbacks/index.tsx';
import CommentButton from '../CommentButton'
import { useState } from 'react';

type feedback = {
    id: number
    image: string
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
    const [feedback, setFeedback] = useState(props.feedbacks || [])
    const [feedbacktext, setFeedbackText] = useState('')

    return(
        <div className={styles.container}>

            <div className={styles.head}>
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

                <textarea 
                    className={styles.textarea} 
                    value={feedbacktext}
                    onChange={(e) => setFeedbackText(e.target.value)}>
                </textarea>

                <CommentButton fb={feedback} setFb={setFeedback} fbText={feedbacktext}/>
            </form>

            {feedback.map((feedback) =>
                <Feedbacks 
                    key={feedback.id}
                    image={feedback.image}
                    author={feedback.author} 
                    content={feedback.content}
                    likes={feedback.likes}
                    time={feedback.time}
                />
            )}
        </div>
    )
}