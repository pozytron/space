import React, {FC} from "react";
import {Link} from "react-router-dom";
import "./Header.css";

const Header: FC = () => {
    return (
        <header>
            <h1><span style={{
                fontFamily: 'cursive',
                color: "rgb(169, 254, 129)"
            }}>SpaceX</span> and the Final Frontier</h1>
            <nav>
                <a href="https://github.com/pozytron/" target={"_blank"} rel="noreferrer">
                    pozytron
                </a>
                
                <ul>
                    <li>
                        <Link to={"/"} className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/ships"} className="nav-link">
                            Ships
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Header