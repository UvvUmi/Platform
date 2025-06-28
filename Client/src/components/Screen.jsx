import {useState} from "react";
function Screen() {

    const [isVisible, setVisibility] = useState(true)

    function playSound() {
        const audio1 = new Audio('src/assets/screen_off_1.mp3');
        const audio2 = new Audio('src/assets/screen_off_2.mp3');

        const sound_arr = [audio1, audio2];
        sound_arr[Math.floor(sound_arr.length * Math.random())].play();
    }

    function handleClick() {
        setVisibility(prevState => !prevState);
        isVisible && playSound();
    }
    return (
            <div className={`flex w-full justify-center space-x-25 overflow-y-hidden`}>
                <span onClick={handleClick}
                    className={`bg-white shadow-2xl shadow-gray-500 h-[350px] w-[550px] ease-in-out transform transition duration-500
                        rounded-b-[15px] cursor-pointer ` +
                        (isVisible ? `translate-y-0` : `translate-y-[-95%] opacity-15`)}>
                </span>
            </div>
    );
}

export default Screen;