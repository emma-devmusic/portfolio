import logo from '../../assets/img/logo-frontend-developer-white.png'

export const Navbar = () => {
    return (
        <div id='navbar-1'>
            <div className="navbar-1_box">
                <div className="logo">
                    <img src={logo} alt="Logo Developer Emmanuel" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">TRABAJOS</a></li>
                        <li><a href="#">CONÓCEME</a></li>
                        <li><a href="#">CONTACTAME</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
