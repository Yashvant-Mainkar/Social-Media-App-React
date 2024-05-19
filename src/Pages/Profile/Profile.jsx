import "./Profile.css"
import Feeds from "../../Components/Feeds/Feeds"
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar"
import Navbar from "../../Components/Navbar/Navbar"
import RightSideBar from "../../Components/RightSideBar/RightSideBar"

function Profile() {
    return (
        <>
            <Navbar />

            <div className="profile">
                <LeftSideBar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img className="profile-cover-img" src="/assets/Post/4.jpg" alt="" />
                            <img className="profile-user-img" src="/assets/Profile Pic/5.jpg" alt="" />
                        </div>
                        <div className="profile-info">
                            <h3 className="profile-info-name">Yash Mainkar</h3>
                            <span className="profile-info-desc">hello my friends</span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feeds />
                        <RightSideBar  profile/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile