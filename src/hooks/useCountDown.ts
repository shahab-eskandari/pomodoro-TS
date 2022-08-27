import {useState, useEffect, useRef} from 'react'; 
import { PomodoroInput } from '../global/types';


const useCountDown = (pamadore: PomodoroInput)=>{
    const pomodoroDurationSec = pamadore.pamadoreDuration * 60 ;
    const breakDurationSec = pamadore.breakDuration * 60;

    const intervalRef = useRef <any|null>(null);
    
    const [countDown, setCountDown]= useState(pomodoroDurationSec);
    const [type, setType] = useState(pamadore.type);
    const [status, setStatus] = useState(pamadore.status);

    useEffect (()=>{
        if (status==='Running'){
            intervalRef.current = setInterval(()=>{
                if(countDown!==0){
                    setCountDown(countDown-1);
                }else{
                    if(type==='Focus'){
                        setStatus('Finished');
                        setCountDown(breakDurationSec);
                    }else{
                        setStatus('Finished');
                        setCountDown(pomodoroDurationSec);
                    }
                }
            },1000)
        }
        if (status==='Finished' || status==='Paused'){
            clearInterval(intervalRef.current);
        }
        return ()=>clearInterval(intervalRef.current)

    }, )

    const handlePause = () => { 
        setStatus("Paused");
    }
  
    const handleContinue = ()=>{
    setStatus("Running");
    }

    const handleStop = ()=>{
    setStatus("Start");
    setCountDown(pomodoroDurationSec);
    }

    const handleStartFocus = ()=>{
    setType("Focus")
    setStatus("Running");
    }

    const handleStartBreak = ()=>{
    setStatus("Running"); 
    setType("Break");
    setCountDown(breakDurationSec);
    }

    const handleSkipBreak = ()=>{
    setType("Focus");
    setStatus("Start"); 
    setCountDown(pomodoroDurationSec);
    }

    return {
        countDown, 
        type, 
        status, 
        handlePause, 
        handleContinue, 
        handleStop, 
        handleStartFocus, 
        handleStartBreak,
        handleSkipBreak
    }; 

}

export {useCountDown}; 