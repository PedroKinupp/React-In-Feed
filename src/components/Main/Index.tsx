import styles from './styles.module.css'
import CommentBox from "../CommentBox";
import thaisImg from "../../assets/ThaísGomes.jpg";
import RicardoImg from "../../assets/RicardoSiqueira.jpg";
import Banner from "../Banner"

export default function Main(){
    return(
        <main className={styles.main}>

            <Banner/>

            <div className={styles.comments}>
                <CommentBox image={thaisImg} name="Thaís Gomes" occupation="Designer" time={1} text1="Lorem ipsum "
                text2="dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet." 
                text3="Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!"/>

                <CommentBox image={RicardoImg} name="Ricardo Siqueira" occupation="Dev Back-end" time={1} text1="Lorem ipsum "
                text2="dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet." 
                text3="Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!"/>
            </div>
        </main>
    )
}