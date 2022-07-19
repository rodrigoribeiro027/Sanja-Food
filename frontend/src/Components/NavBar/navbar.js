import icon from "../../static/icon.png";
import "./navbar.css";
import { useEffect, useState } from 'react';
import M from 'materialize-css';

export default function NavBaR() {

    useEffect(() => {
        M.AutoInit();
    // Navbar
    
    const elemsSidenav = document.querySelectorAll(".sidenav");
    const instancesSidenav = M.Sidenav.init(elemsSidenav, {
        edge: "left"
    });

    }, [])

    return (
        <>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper navcor">

                        <a href="#" className="brand-logo">Sanja Food</a>


                        <a href="#" data-target="mobile-navbar" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>

                        <ul id="navbar-items" className="right hide-on-med-and-down">
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Contatos</a></li>
                            <li><a href="#">Sugestões</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <ul id="mobile-navbar" className="sidenav">
                <li><a href="#">Início</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contatos</a></li>
            </ul>

        </>
    )
}
