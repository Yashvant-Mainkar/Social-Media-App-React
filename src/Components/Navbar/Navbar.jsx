import "./Navbar.css"
import { IoSearch, IoPerson, IoChatboxEllipsesSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
// "/Social Media App/public/assets/Profile Pic"

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <span className="logo">SkillWall</span>
            </div>
            <div className="navbar-center">
                <div className="search-bar">
                    <IoSearch className="search-icon" />
                    <input type="text" placeholder="Search for friends post or video" className="search-input" />
                </div>
            </div>
            <div className="navbar-right">
                <span className="nav-link">HomePage</span>
                <span className="nav-link">TimeLine</span>

                <div className="navbar-right-icons">
                    <div className="navbar-item-icons">
                        <IoPerson className="navbar-3-icons"/>
                        <span className="navbar-icon-batch">1</span>
                    </div>
                    <div className="navbar-item-icons">
                        <IoIosNotifications className="navbar-3-icons"/>
                        <span className="navbar-icon-batch">2</span>
                    </div>
                    <div className="navbar-item-icons">
                        <IoChatboxEllipsesSharp className="navbar-3-icons"/>
                        <span className="navbar-icon-batch">1</span>
                    </div>
                </div>
                <img src="/assets/Profile Pic/7.jpeg" alt="profile-7" className="navbar-img" />
            </div>
        </div>
    )
}

export default Navbar