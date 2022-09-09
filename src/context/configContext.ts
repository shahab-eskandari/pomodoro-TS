import {createContext} from 'react'; 
import { Config } from '../global/types';


export const initialConfig: Config = {
    pomodoroDuration: 20, 
    breakDuration: 5 
}

export const configContext = createContext({
    config:initialConfig,
    setConfig:(config:Config)=>{}
});

