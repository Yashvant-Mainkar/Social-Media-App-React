import "./RightbarOnline.css"

function RightbarOnline({user}) {
    return (
        <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
                <img className="rightbar-profile-img" src={user.profilePicture} alt="" />
                <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">{user.username}</span>
        </li>
    )
}
export default RightbarOnline