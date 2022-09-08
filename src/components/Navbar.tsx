import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import ToggleButton from "./toggleButton";

type NavbarProps = {
    openDrawer: (state: boolean)=>void
}

const Navbar = (props: NavbarProps)=>{
    
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
                        <button
                            className={`${theme.theme}-a`} 
                            onClick={()=>props.openDrawer(true)}>
                            Setting
                        </button>
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