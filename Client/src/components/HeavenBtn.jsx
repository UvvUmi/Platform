function HeavenBtn({text, action}) {
    return (
        <button
                onClick={action}
                className={`bg-white shadow-xl/30 shadow-gray-500 h-[50px] w-[150px] ease-in-out transform transition duration-500`}>
            {text}
        </button>
    )
}
export default HeavenBtn;