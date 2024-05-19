import "./SidebarFriends.css"

function SidebarFriends({user}) {
    return (
        <li className="sidebar-friends">
            <img className="sidebar-friends-img" src={user.profilePicture} alt="person-1" />
            <span className="sidebar-friends-name">{user.username}</span>
        </li>
    )
}

export default SidebarFriends