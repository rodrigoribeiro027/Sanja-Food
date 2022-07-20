import icon from "../../static/icon.png";
import { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/tailwind-light/theme.css"
import "./navbar.css";
import {Link,Navigate,useNavigate} from 'react-router-dom';

export default function NavBaR() {

    const navigate = useNavigate()
    
    const items = [
        {
            label:'Sugestão',
        },
        {
            label:'Sobre'
        },
        {
            label:'Login'
        },
        {
            label:'Contatos'
        }
    ];

    const navegar = (e) => {
        if(e == 'Sugestão' ){

        }
        if(e == 'Sobre' ){
            
        }
        if(e == 'Login' ){
            navigate('/Login')
        }
        if(e == 'Contatos' ){
            navigate('/Cadastro')
        }
        
    }

    return (
        <>
        <Menubar onClick={e=>navegar(e.target.textContent)} style={{backgroundColor:'#AD8B73', border:0 ,borderRadius:0}} model={items}/>
        </>
    )
}
