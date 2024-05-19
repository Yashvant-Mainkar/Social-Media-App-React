import "./Post.css"
import { IoMdMore } from "react-icons/io";
import {Users} from "../DummyData"
import { useState } from "react";

function Post({post}) {
    const[like,setLike] = useState(post.like)
    const[Islike,setIsLike] = useState(false)

    const User = Users.filter(item=> item.id === post.userId)[0].username
    const ProfilePicture = Users.filter(item=> item.id === post.userId)[0].profilePicture
    
    function handleLike(){
        setLike(Islike ? like-1:like+1)
        setIsLike(!Islike)
    }

    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-profile-img" src={ProfilePicture} alt="profile-4" />
                        <span className="post-username">{User}</span>
                        <span className="post-date">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <IoMdMore/>
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">{post?.desc}</span>
                    <img className="post-img" src={post.photo} alt="post-1" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img className="like-icon" src="/assets/heart.png" onClick={handleLike} alt="heart" />
                        <img className="like-icon" src="/assets/like.png"  alt="like" />
                        <span className="post-like-counter">{like} People like it</span>
                    </div>
                    <div className="post-bottom-right">
                    <span className="post-comment-text">{post.comments}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post