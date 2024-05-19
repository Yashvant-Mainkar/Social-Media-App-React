import { Users } from "../DummyData"
import RightbarOnline from "../RightbarOnline/RightbarOnline"
import "./RightSideBar.css"


function RightSideBar({ profile }) {
    function HomeRightbar() {
        return (
            <>
                <div className="birthday-container">
                    <img className="birthday-img" src="/assets/gift.png" alt="gift" />
                    <span className="birthday-text"> <b>Paul Foster</b> and <b>3 other friends</b> have a birhday today.</span>
                </div>
                <img className="rightbar-ad" src="/assets/Ad.png" alt="" />
                <h4 className="rightbar-title">Online Friends</h4>
                <ul className="rightbar-friend-list">
                    {Users.map(item => (
                        <RightbarOnline key={item.id} user={item} />
                    ))}

                </ul>
            </>
        )
    }

    function ProfileRightbar() {
        return (
            <>
                <h4 className="rightbar-title">User information</h4>
                <div className="rightbar-info">
                    <div className="rightbar-infoItem">
                        <span className="rightbar-infoKey">City:</span>
                        <span className="rightbar-infoValue">New York</span>
                    </div>
                    <div className="rightbar-infoItem">
                        <span className="rightbar-infoKey">From:</span>
                        <span className="rightbar-infoValue">Madrid</span>
                    </div>
                    <div className="rightbar-infoItem">
                        <span className="rightbar-infoKey">Relationship:</span>
                        <span className="rightbar-infoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbar-title">User friends</h4>
                <div className="rightbar-followings">
                    <div className="rightbar-following">
                        <img className="rightbar-followingImg" src="/assets/Profile Pic/4.jpg" alt="" />
                        <span className="rightbar-followingName">John Carter</span>
                    </div>
                    <div className="rightbar-following">
                        <img className="rightbar-followingImg" src="/assets/Profile Pic/4.jpg" alt="" />
                        <span className="rightbar-followingName">John Carter</span>
                    </div>
                    <div className="rightbar-following">
                        <img className="rightbar-followingImg" src="/assets/Profile Pic/4.jpg" alt="" />
                        <span className="rightbar-followingName">John Carter</span>
                    </div>
                    <div className="rightbar-following">
                        <img className="rightbar-followingImg" src="/assets/Profile Pic/4.jpg" alt="" />
                        <span className="rightbar-followingName">John Carter</span>
                    </div>
                    <div className="rightbar-following">
                        <img className="rightbar-followingImg" src="/assets/Profile Pic/4.jpg" alt="" />
                        <span className="rightbar-followingName">John Carter</span>
                    </div>
                    <div className="rightbar-following">
                        <img className="rightbar-followingImg" src="/assets/Profile Pic/4.jpg" alt="" />
                        <span className="rightbar-followingName">John Carter</span>
                    </div>
                    <div className="rightbar-following">
                        <img className="rightbar-followingImg" src="/assets/Profile Pic/4.jpg" alt="" />
                        <span className="rightbar-followingName">John Carter</span>
                    </div>
                    <div className="rightbar-following">
                        <img className="rightbar-followingImg" src="/assets/Profile Pic/4.jpg" alt="" />
                        <span className="rightbar-followingName">John Carter</span>
                    </div>
                    <div className="rightbar-following">
                        <img className="rightbar-followingImg" src="/assets/Profile Pic/4.jpg" alt="" />
                        <span className="rightbar-followingName">John Carter</span>
                    </div>
                    <div className="rightbar-following">
                        <img className="rightbar-followingImg" src="/assets/Profile Pic/4.jpg" alt="" />
                        <span className="rightbar-followingName">John Carter</span>
                    </div>
                    <div className="rightbar-following">
                        <img className="rightbar-followingImg" src="/assets/Profile Pic/4.jpg" alt="" />
                        <span className="rightbar-followingName">John Carter</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            Right Side Bar
            <div className="rightbar-wrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>

        </div>
    )
}

export default RightSideBar