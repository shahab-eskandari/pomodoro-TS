import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { PomodoroOutput } from "../global/types";

const ButtonsPanel = (data: PomodoroOutput )=>{

    const theme = useContext(ThemeContext); 

    let 
    startToFocusBtn, 
    pauseBtn, 
    stopBtn, 
    continueBtn, 
    startBreakTimeBtn, 
    skipBreakTimeBtn = false;

    if((data.type==="Break" && data.status==="Finished") ||
    (data.type==="Focus" && data.status==="Start" )){
        startToFocusBtn = true; 
    }
    if(data.type==="Focus" && data.status==="Running"){
        pauseBtn = true; 
    }
    if(data.type==="Focus" && data.status==="Paused"){
        stopBtn = true;
        continueBtn = true; 
    }
    if(data.type==="Focus" && data.status==="Finished"){
        startBreakTimeBtn = true;
    }
    if(data.type==="Break" && data.status==="Running"){
        skipBreakTimeBtn = true; 
    }

    return(
        <div className="buttons-panel__container">
            {startToFocusBtn && 
            <button 
                className={`buttons-panel__button ${theme.theme}-btn`}  
                onClick={()=>data.handleStartFocus()}>Start to Focus
            </button>}
            {pauseBtn && 
            <button
                className={`buttons-panel__button ${theme.theme}-btn`}
                onClick={()=>data.handlePause()}>Pause
            </button>}
            {stopBtn && 
            <button
                className={`buttons-panel__button ${theme.theme}-btn`}
                onClick={()=>data.handleStop()}>Stop
            </button>}
            {continueBtn && 
            <button
                className={`buttons-panel__button ${theme.theme}-btn`}
                onClick={()=>data.handleContinue()}>Continue
            </button>}
            {startBreakTimeBtn && 
            <button
                className={`buttons-panel__button ${theme.theme}-btn`}
                onClick={()=>data.handleStartBreak()}>Start Break Time
            </button>}
            {skipBreakTimeBtn && 
            <button 
            className={`buttons-panel__button ${theme.theme}-btn`}
            onClick={()=>{data.handleSkipBreak()}}>Skip Break Time
            </button>}
        </div>
    )
}

export default ButtonsPanel; 