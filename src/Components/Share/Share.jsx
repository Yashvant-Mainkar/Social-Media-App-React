import "./Share.css"
import { MdPermMedia, MdLocationOn } from "react-icons/md"
import { PiTagSimpleFill } from "react-icons/pi";
import { IoHappy } from "react-icons/io5";

function Share() {
    return (
        <div className="share">
            <div className="share-wrapper">
                <div className="share-top">
                    <img className="share-profile-img" src="/assets/Profile Pic/3.jpg" alt="profile-2" />
                    <input
                        placeholder="What's in your mind yash?"
                        className="share-input"
                    />
                </div>
                <hr className="share-hr" />
                <div className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <MdPermMedia className="share-icon ic1" />
                            <span className="share-option-text">Photo or Video</span>
                        </div>
                        <div className="share-option">
                            <PiTagSimpleFill className="share-icon ic2" />
                            <span className="share-option-text">Tag</span>
                        </div>
                        <div className="share-option">
                            <MdLocationOn className="share-icon ic3" />
                            <span className="share-option-text">Location</span>
                        </div>
                        <div className="share-option">
                            <IoHappy className="share-icon ic4" />
                            <span className="share-option-text">Feelings</span>
                        </div>
                    </div>
                    <button className="share-button">Share</button>

                </div>
            </div>

        </div>
    )
}
export default Share