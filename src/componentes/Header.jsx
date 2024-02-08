// import React from 'react'

export default function Header() {
    return (
        <header id="header">
            <div className="wrap">
                <div id="logo">
                    <span className="gear">S</span>
                    <h3>BLOG</h3>
                </div>
                <nav id="menu">
                    <ul>
                        <li><a href="index.html">INICIO</a></li>
                        <li><a href="proyectos.html">BLOG/PROYECTOS</a></li>
                        <li><a href="#">FORMACIÓN</a></li>
                        <li><a href="#">CONTACTO</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
