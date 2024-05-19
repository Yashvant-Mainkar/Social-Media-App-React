import Post from "../Post/Post"
import Share from "../Share/Share"
import "./Feeds.css"
import {Posts} from "../DummyData"

function Feeds(){
    return(
        <div className="Feeds">
                <div className="feed-wrapper">
                    <Share/>
                    {
                        Posts && Posts.length ? 
                        Posts.map(item=>(
                            <Post key={item.id} post={item}/>
                        ))
                        : <h1>Data not found</h1>
                    }
                </div>
        </div>
    )
}

export default Feeds