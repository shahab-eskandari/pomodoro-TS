import {createContext} from 'react'; 
import { Themes } from '../global/types';

export const themes: Themes = {
  dark: "dark-content",
  light: "white-content",
};

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: (theme:string) => {},
});