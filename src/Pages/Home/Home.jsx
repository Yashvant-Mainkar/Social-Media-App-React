import Feeds from "../../Components/Feeds/Feeds"
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar"
import Navbar from "../../Components/Navbar/Navbar"
import RightSideBar from "../../Components/RightSideBar/RightSideBar"
import Profile from "../Profile/Profile"
import "./Home.css"

function Home(){
    return(
        <>
            {/* <h1>Home Component Page</h1> */}
            <Navbar/>
            <div className="homeContainer">
            <LeftSideBar/>
            <Feeds/>
            <RightSideBar/>
            </div>
            {/* <Profile/> */}
        </>
    )
}

export default Home