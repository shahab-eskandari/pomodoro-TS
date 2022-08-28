
import { useState, useEffect, ReactNode } from 'react';
import { ThemeContext, themes } from './themeContext';

type ThemeContextWrapperProps = {
    children: ReactNode
}

export default function ThemeContextWrapper(props:ThemeContextWrapperProps) {
    
    const [theme, setTheme] = useState(themes.light);

    function changeTheme(theme:string) {
        if(theme===""){
            setTheme("dark-content");
        }else{
            setTheme("");
        }
    }

    useEffect(() => {
        switch (theme) {
        case themes.dark:
            document.body.classList.add('dark-content');
            break;
        case themes.light:
        default:
            document.body.classList.remove('dark-content');
            break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
        {props.children}
        </ThemeContext.Provider>
    );
}