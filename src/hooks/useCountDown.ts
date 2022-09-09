import {useState, useEffect, useRef, useContext} from 'react'; 
import { PomodoroInput } from '../global/types';
import { configContext } from '../context/configContext';

 

const useCountDown = ()=>{
    
    const config = useContext(configContext);

    const pomodoroInput: PomodoroInput ={
        pomodoroDuration: config.config.pomodoroDuration, 
        breakDuration: config.config.breakDuration,
        type: 'Focus',
        status: 'Start'
    }
    
    const pomodoroDurationSec = pomodoroInput.pomodoroDuration * 60 ;
    const breakDurationSec = pomodoroInput.breakDuration * 60;
    console.log(pomodoroDurationSec)

    const intervalRef = useRef <any|null>(null);
    
    const [countDown, setCountDown]= useState(pomodoroDurationSec);
    const [type, setType] = useState(pomodoroInput.type);
    const [status, setStatus] = useState(pomodoroInput.status);

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