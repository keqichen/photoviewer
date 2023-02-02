import React from "react";  // import React (to provide access to TSX)
import "./Menu.css"


export function Menu() {
    return (
        <>
            <nav className="menu-wrapper">
                <ul className="menu">
                    <li className="menu-items">Home</li>
                    <li className="menu-items">Photos</li>
                </ul> 
            </nav>
            <button className="button" onClick={() => console.log("hi")}>Menu</button>
        </>


    )
}
