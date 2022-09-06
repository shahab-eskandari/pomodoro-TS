
import { useState, useEffect, ReactNode } from 'react';
import { ThemeContext, themes } from './themeContext';

type ThemeContextWrapperProps = {
    children: ReactNode
}

export default function ThemeContextWrapper(props:ThemeContextWrapperProps) {
    
    const [theme, setTheme] = useState(themes.light);

    function changeTheme(theme:string) {
        if(theme==="white-content"){
            setTheme("dark-content");
        }else{
            setTheme("white-content");
        }
    }

    useEffect(() => {
        switch (theme) {
        case themes.dark:
            document.body.classList.contains('white-content')?
            document.body.classList.replace('white-content','dark-content'):
            document.body.classList.add('dark-content');
            break;
        case themes.light:
        default:
            document.body.classList.contains('dark-content')?
            document.body.classList.replace('dark-content','white-content'):
            document.body.classList.add('white-content');
            break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
        {props.children}
        </ThemeContext.Provider>
    );
}