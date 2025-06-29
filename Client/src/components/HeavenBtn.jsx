function HeavenBtn({text, id, action}) {
    return (
        <button id={id}
                onClick={action}
                className={`bg-white shadow-xl/30 shadow-gray-500 h-[50px] w-[150px] ease-in-out transform transition duration-500`}>
            {text}
        </button>
    )
}
export default HeavenBtn;