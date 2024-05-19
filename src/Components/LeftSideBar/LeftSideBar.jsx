import "./LeftSideBar.css"
import { MdRssFeed, MdOutlineGroup } from "react-icons/md";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { FaVideo, FaBookmark, FaRegQuestionCircle } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { Users } from "../DummyData";
import SidebarFriends from "../SidebarFriends/SidebarFriends";

function LeftSideBar() {
    return (
        <div className="LeftSideBar">
            Left side bar
            <div className="sidebar-wrapper">
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <MdRssFeed className="sidebar-Icon" />
                        <span className="sidebar-list-itemText">Feed</span>
                    </li>
                    <li className="sidebar-list-item">
                        <IoChatboxEllipsesSharp className="sidebar-Icon" />
                        <span className="sidebar-list-itemText">Chat</span>
                    </li>
                    <li className="sidebar-list-item">
                        <FaVideo className="sidebar-Icon" />
                        <span className="sidebar-list-itemText">Video</span>
                    </li>
                    <li className="sidebar-list-item">
                        <MdOutlineGroup className="sidebar-Icon" />
                        <span className="sidebar-list-itemText">Groups</span>
                    </li>
                    <li className="sidebar-list-item">
                        <FaBookmark className="sidebar-Icon" />
                        <span className="sidebar-list-itemText">Bookmarks</span>
                    </li>
                    <li className="sidebar-list-item">
                        <FaRegQuestionCircle className="sidebar-Icon" />
                        <span className="sidebar-list-itemText">Questions</span>
                    </li>
                    <li className="sidebar-list-item">
                        <BsBagFill className="sidebar-Icon" />
                        <span className="sidebar-list-itemText">Jobs</span>
                    </li>
                    <li className="sidebar-list-item">
                        <FaCalendar className="sidebar-Icon" />
                        <span className="sidebar-list-itemText">Events</span>
                    </li>
                    <li className="sidebar-list-item">
                        <IoSchoolSharp className="sidebar-Icon" />
                        <span className="sidebar-list-itemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebar-button">Show more</button>
                <hr className="sidebar-hr" />
                <ul className="sidebar-friends-list">
                    {Users.map(item=>(
                        <SidebarFriends key={item.id} user={item}/>
                    ))}          
                </ul>
            </div>
        </div>
    )
}

export default LeftSideBar
