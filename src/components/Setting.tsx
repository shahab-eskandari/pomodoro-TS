import { useContext, useState } from "react";
import Counter from "./Counter";
import { configContext } from "../context/configContext";
import { ThemeContext } from "../context/themeContext";

type SettingProps = {
    openDrawer: (state: boolean)=>void
}

export default function Setting( props: SettingProps) {

    const config = useContext(configContext);
    const theme = useContext(ThemeContext);
    
    const [pomodoroDuration, setPomodoroDuration] = useState(config.config.pomodoroDuration);
    const [breakDuration, setBreakDuration] = useState(config.config.breakDuration);
    
    const [durationError, setDurationError] = useState(false); 

    if(pomodoroDuration <= 1 || breakDuration <= 1){
        setDurationError(true); 
    }
    
    return (
    <>
        <div className="setting__container">
            
            <div className="setting__row">
                <label htmlFor='pomodoro_duration'>Pomodoro Duration</label>
                <Counter duration={pomodoroDuration} setDuration={setPomodoroDuration} durationError={durationError} />
            </div>
            
            <div className="setting__row">
                <label htmlFor='break_duration'>Break Duration</label>
                <Counter duration={breakDuration} setDuration={setBreakDuration} durationError={durationError}/>
            </div>
        </div>
        <div className="setting__btn-container">
            <button
                className={`btn ${theme.theme}-btn`}
                onClick={()=>props.openDrawer(false)}
            >
                Cancel
            </button>

            <button
                className={`btn ${theme.theme}-btn`}
                onClick={()=>{
                    config.setConfig({pomodoroDuration:pomodoroDuration, breakDuration:breakDuration});
                    props.openDrawer(false);
                }
                }
            >
                Save Changes
            </button>
        </div>

    </>
    )
}
