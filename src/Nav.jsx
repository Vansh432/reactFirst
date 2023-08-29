import Logo from './Nike-Logo.png'
function Navigaion() {

    return <>
        <nav>
            <div className="logoCantainer">
                <img src={Logo} alt="logo lading" />
            </div>
            <ul>
                <li><a href="https://www.instagram.com/">
                    HOME
                </a></li>
                <li><a href="https://www.instagram.com/">
                    LOCATION
                    </a></li>
                <li><a href="https://www.instagram.com/">
                    ABOUT
                    </a></li>
                <li><a href="https://www.instagram.com/">
                    CONTACT
                    </a></li>
                   
            </ul>
            <div id="loginBox" >
                <a href="https://www.instagram.com/">Login</a>
                <ion-icon name="log-in-outline"></ion-icon>
            </div>
        </nav>
    </>
}

export default Navigaion;
