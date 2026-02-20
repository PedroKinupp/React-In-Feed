import styles from './styles.module.css'
import Picture from '../../assets/image.png'

type feedback = {
    id: number
    image: string
    author: string
    time: number
    content: string
    likes: number
}
interface IFeedbackProps{
    fb: feedback[] | any[]
    setFb: (fb : feedback[]) => void
    fbText: string
}

export default function CommentBox(props : IFeedbackProps){
    function handleComment(text : string){
        const newFeedback = {
                key: 9,
                image: Picture,
                author: "Eu",
                time: 0,
                content: text,
                likes: 0,
            }

        props.setFb([newFeedback, ...props.fb])
    }

    return(
        <button 
            className={styles.button}
            type='button'
            onClick={() => handleComment(props.fbText)}
            >
            Comentar
        </button>
    )
}