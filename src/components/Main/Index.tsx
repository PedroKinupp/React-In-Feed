import styles from './styles.module.css'
import CommentBox from "../CommentBox";
import thaisImg from "../../assets/ThaísGomes.jpg";
import RicardoImg from "../../assets/RicardoSiqueira.jpg";
import Banner from "../Banner"

type feedback = {
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

export default function Main(){
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
                        author: "Felyppe Nunes",
                        time: 1,
                        content: "Texto Texto Texto",
                        likes: 7
                    },
                    {
                        author: "Felyppe Nunes",
                        time: 2,
                        content: "Texto Texto Texto",
                        likes: 8
                    },
                    {
                        author: "Felyppe Nunes",
                        time: 8,
                        content: "Texto Texto Texto",
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
                        author: "Felyppe Nunes",
                        time: 1,
                        content: "Texto Texto Texto",
                        likes: 7
                    }]
        },
    ]
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