import icon from "../../static/icon.png";
import { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/tailwind-light/theme.css"
import "./navbar.css";

export default function NavBaR() {

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
    return (
        <>
        <Menubar style={{backgroundColor:'#AD8B73', border:0 ,borderRadius:0}}model={items}/>
        </>
    )
}
