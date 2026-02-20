import styles from './styles.module.css'
import CommentBox from "../CommentBox";
import thaisImg from "../../assets/ThaísGomes.jpg";
import RicardoImg from "../../assets/RicardoSiqueira.jpg";
import FelyppeImg from "../../assets/FelyppeImg.jpg";
import JessyImg from "../../assets/JessyImg.jpg";
import AnaPaulaImg from "../../assets/AnaPaulaImg.jpg";
import Banner from "../Banner"

type feedback = {
    id: number
    image: string
    author: string
    time: number
    content: string
    likes: number
}

type Post = {
  id: number
  image: string
  author: string
  occupation: string
  text1: string
  text2: string
  text3: string
  feedbacks: feedback[]
}

const posts: Post[] = [
        {
            id: 1,
            image: thaisImg,
            author: "Thaís Gomes",
            occupation: "Designer",
            text1: "Lorem ipsum ",
            text2: "dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet.",
            text3: "Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!",
            feedbacks: [
                    {
                        id: 1,
                        image:  AnaPaulaImg,
                        author: "Ana Paula Renault",
                        time: 1,
                        content: "Est aspernatur quis eos natus dicta et internos",
                        likes: 7
                    },
                    {
                        id: 2,
                        image: JessyImg,
                        author: "Babu Santana",
                        time: 2,
                        content: "dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex",
                        likes: 8
                    },
                    {
                        id: 3,
                        image: FelyppeImg,
                        author: "Felyppe Nunes",
                        time: 8,
                        content: "Est aspernatur quis eos natus dicta et internos",
                        likes: 9
                    }
                    ]
        },
        {
            id: 2,
            image: RicardoImg,
            author: "Ricardo Siqueira",
            occupation: "Dev Back-end",
            text1: "Lorem ipsum ",
            text2: "dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet.",
            text3: "Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!",
            feedbacks: [{
                        id: 1,
                        image: thaisImg,
                        author: "Thaís Gomes",
                        time: 1,
                        content: "Est aspernatur quis eos natus dicta et internos",
                        likes: 7
                    }]
        },
    ]

export default function Main(){
    return(
        <main className={styles.main}>

            <Banner/>

            <div className={styles.comments}>
                {posts.map(post =>
                    <CommentBox
                    key={post.id}
                    image={post.image}
                    name={post.author}
                    occupation={post.occupation}
                    time={1}
                    text1={post.text1}
                    text2={post.text2}
                    text3={post.text3}
                    feedbacks={post.feedbacks}
                    />
                )}
            </div>
            
        </main>
    )
}