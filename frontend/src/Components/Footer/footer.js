import "./footer.css";
import { useEffect, useState } from 'react';
import facebook from "../../static/facebook.png";
import instagram from "../../static/instagram.png";
import twitter from "../../static/twitter.png";
import { Link } from 'react-router-dom';


export default function NavBaR() {

    return (
        <> 
            <footer>
                    <div className="container">

                        <div>
                            <div>
                                <div className="footer-items">
                                    <a>Social</a>
                                </div>
                                    <a href="https://pt-br.facebook.com/" target="_blank"><img className="icon" src={facebook}></img></a>
                                    
                                    <a href="https://www.instagram.com/" target="_blank"><img className="icon" src={instagram}></img></a>
                                    
                                    <a href="https://twitter.com/" target="_blank"><img className="icon" src= {twitter}></img></a>
                            </div>  
                        </div>
                        <div className="">
                            <div>
                                <div className="footer-items">
                                    <a>Contato</a>
                                </div>
                                <p>SanjaFoods@gmail.com</p>
                                <p>(12) 3922-1258</p>
                            </div>  
                        </div>
                    </div>

                    <div className="autoria">
                        <p>Created By Rodrigo E Nicolas</p>
                    </div>
            </footer>
        </>
    )
}
