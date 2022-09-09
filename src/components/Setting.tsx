import { useContext, useState } from "react";
import Counter from "./Counter";
import { configContext } from "../context/configContext";

type SettingProps = {
    openDrawer: (state: boolean)=>void
}

export default function Setting( props: SettingProps) {

    const config = useContext(configContext);
    
    const [pomodoroDuration, setPomodoroDuration] = useState(config.config.pomodoroDuration);
    const [breakDuration, setBreakDuration] = useState(config.config.breakDuration)
    
    return (
    <>
        <h1>Setting</h1>
        <fieldset>
            <legend>Pomodoro Setting:</legend>
            
            <label htmlFor='pomodoro_duration'>Pomodoro Duration</label>
            <Counter duration={pomodoroDuration} setDuration={setPomodoroDuration} />
            
            <label htmlFor='break_duration'>Break Duration</label>
            <Counter duration={breakDuration} setDuration={setBreakDuration}/>
            
        </fieldset>
        <div>
            <button
                className='counter__button'
                onClick={()=>props.openDrawer(false)}
            >
                Cancel
            </button>

            <button
                className='counter__button'
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
