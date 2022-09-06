import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import ToggleButton from "./toggleButton";

const Navbar = ()=>{

    const theme = useContext(ThemeContext); 

    return(   
        <nav>
            <div>
                <ul className="nav-link">
                    <li>
                        <a 
                            className={`${theme.theme}-a`}
                            href="/">
                            Project
                        </a>
                    </li>
                    <li>
                        <a
                            className={`${theme.theme}-a`} 
                            href="/">
                            Task Manager
                        </a>
                    </li>
                    <li>
                        <a
                            className={`${theme.theme}-a`} 
                            href="/">
                            Setting
                            </a>
                    </li>
                </ul>
            </div>
            <div>
                <ToggleButton/>
            </div>
        </nav>
    )
}

export default Navbar