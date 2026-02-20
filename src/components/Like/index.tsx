import styles from './styles.module.css'
import like from "../../assets/like.png"
import notlike from '../../assets/notlike.png'
import { useRef, useState } from 'react'

type propstype = {
    likes: number
}

export default function LikeButton(props : propstype){
    const [LikeNum, setLikeNum] = useState(props.likes)
    const [icon, setIcon] = useState(notlike)
    const [textColor, setTextcolor] = useState("#DDDDDD")

    const Liked = useRef(false)

    function handleLike(){
        if(!Liked.current){
            setLikeNum(LikeNum + 1)
            setIcon(like)
            setTextcolor("#007DFA")
            Liked.current = true
        } else{
            setLikeNum(LikeNum - 1)
            setIcon(notlike)
            setTextcolor("#DDDDDD")
            Liked.current = false
        }
    }

    return(
        <div 
            className={styles.like}>
            <button
                onClick={handleLike}
                style={{ color: textColor }}
            >
                <img src={icon}/>
                Like • {LikeNum}
            </button>
        </div>
    )
}