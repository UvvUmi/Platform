import {useState} from "react";
import HeavenBtn from "./HeavenBtn.jsx";
import Lola from "./Lola.jsx";
import Daniilas from "./Daniilas.jsx";
import screenOff1 from "../assets/screen_off_1.mp3"
import screenOff2 from "../assets/screen_off_2.mp3"
import logImage from "../assets/log.svg";

function LandingProjector() {
    const [isVisible, setVisibility] = useState(true)
    const [viewId, setViewId] = useState(0);

    function playSound() {
        const files = [screenOff1, screenOff2];
        new Audio(files[Math.floor(Math.random() * files.length)]).play();
    }

    function handleClick() {
        setVisibility(prevState => !prevState);
        isVisible && playSound();
    }

    function renderComponent(id) {
        return (
            {
                0: null,
                1: <Daniilas/>,
                2: <Lola/>,
            }[id]
        )
    }

    return (
        <>
            <div className={`flex w-[100%] justify-center`}>
                <img src={logImage} alt={`Horizontal tree log`} className={`w-[750px] h-[150px]`}/>
            </div>
            <div className={`flex w-full justify-center space-x-25 overflow-y-hidden mt-[-4px] pb-[75px]`}>
                    <span onClick={handleClick}
                        className={`bg-white shadow-xl/30 shadow-gray-500 h-[350px] w-[550px] ease-in-out transform transition duration-500
                        rounded-b-[15px] cursor-pointer flex justify-center items-center ` + (isVisible ? `translate-y-0` : `translate-y-[-95%] opacity-15`)}>
                        {renderComponent(viewId)}
                    </span>
            </div>
            <div className={`flex w-full justify-center space-x-25 mb-10`}>
                <HeavenBtn text={`ABOUT ME`} id={`aboutDaniilas`} action={()=>{setViewId(1)}}/>
                <HeavenBtn text={`ABOUT LOLA`} id={`aboutLola`} action={()=>{setViewId(2)}}/>
            </div>
        </>
    )
}

export default LandingProjector;