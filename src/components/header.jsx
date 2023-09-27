import React from 'react'

import Logo from "../assets/images/logo.png"
import '../assets/css/Header.css'



const Header = () => {
    return (
        <div>
            <div>
                <header class="container">
                    <h1 class="titulo">Maestrías USAC</h1>
                    <div class="logos">
                        <img className="logo" src={Logo} alt="Logo" />
                    </div>
                </header>
            </div>

        </div>
    )
}

export default Header
