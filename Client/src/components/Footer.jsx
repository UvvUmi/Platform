import reactLogo from '../assets/react.svg';

function Footer() {
    const curYear = new Date().getFullYear();

    return (
        <div className={`flex w-full justify-center`}>
            <footer>
                <div className={`flex w-full justify-center text-white font-bold text-lg italic`}>
                    Made with<a href={`https://react.dev/`}><img width={`30px`} src={reactLogo} alt={`react logo`} className={`mx-1 opacity-65 hover:opacity-100`}/></a> {curYear}
                </div>
            </footer>
        </div>
    )
}

export default Footer;