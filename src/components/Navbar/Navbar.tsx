import { useEffect, useState } from 'react'

export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setOpenMenu(true)
        }, 3000);
    }, [])

    return (
        <div id='navbar-1'>
            <header className={`navbar-1_box ${!openMenu && 'mini-nav'}`}>
                <div className="logo">
                    <h2>{'<'}<span>/</span>{'>'}</h2>
                </div>
                <div className='line'>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">TRABAJOS</a></li>
                        <li><a href="#">CONÓCEME</a></li>
                        <li><a href="#">CONTACTAME</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
