import React from "react";  // import React (to provide access to TSX)
import * as ReactDOM from 'react-dom';
import "./Menu.css"


export function Menu() {
    const [menu,setMenu] = React.useState(false);

    return (
        <>
            <nav className={menu?"menu-appear":"menu-wrapper"}>
                <ul className="menu">
                    <li className="menu-items">Home</li>
                    <li className="menu-items">Photos</li>
                </ul> 
            </nav>
            <button className="button" onClick={()=>setMenu(!menu)}>Menu</button>
        </>


    )
}
