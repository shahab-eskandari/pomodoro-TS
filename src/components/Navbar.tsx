import ToggleButton from "./toggleButton";

const Navbar = ()=>{
    return(   
        <nav>
            <div>
                <ul className="nav-link">
                    <li>
                        <a href="/">Project</a>
                    </li>
                    <li>
                        <a href="/">Task Manager</a>
                    </li>
                    <li>
                        <a href="/">Setting</a>
                    </li>
                </ul>
            </div>
            <div>
                <ToggleButton/>
                <button className="btn nav-link">Login</button>
                <button className="btn nav-link">Sing up</button>
            </div>
        </nav>
    )
}

export default Navbar