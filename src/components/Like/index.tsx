import styles from './styles.module.css'
import like from "../../assets/like.png"
import { useRef, useState } from 'react'

type propstype = {
    likes: number
}

export default function LikeButton(props : propstype){
    const [LikeNum, setLikeNum] = useState(props.likes)

    const Liked = useRef(false)

    function handleLike(){
        if(!Liked.current){
            setLikeNum(LikeNum + 1)
            Liked.current = true
        } else{
            setLikeNum(LikeNum - 1)
            Liked.current = false
        }
    }

    return(
        <div className={styles.like}>
            <button
                onClick={handleLike}
            >
                <img src={like}/>
                Like • {LikeNum}
            </button>
        </div>
    )
}