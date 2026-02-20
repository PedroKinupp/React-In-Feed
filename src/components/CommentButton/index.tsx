import styles from './styles.module.css'
interface IFeedbackProps{
    onComment: (fbText : string) => void
    fbText: string
}

export default function CommentBox(props : IFeedbackProps){
    return(
        <button 
            className={styles.button}
            type='button'
            onClick={() => props.onComment(props.fbText)}
            >
            Comentar
        </button>
    )
}