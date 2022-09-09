type pomodoroType = 'Focus' | 'Break';
type pomodoroStatus = 'Start' | 'Running' | 'Paused' | 'Finished';
export type Config ={
    pomodoroDuration: number
    breakDuration: number
} 

export interface PomodoroInput {
    pomodoroDuration: number 
    breakDuration: number 
    type: pomodoroType
    status: pomodoroStatus
}

export interface PomodoroOutput {
    countDown: number 
    type: pomodoroType
    status: pomodoroStatus 
    handlePause: ()=>void 
    handleContinue: ()=>void
    handleStop: ()=>void
    handleStartFocus: ()=>void
    handleStartBreak: ()=>void
    handleSkipBreak: ()=>void
}

export interface Themes {
    dark: string
    light: string
}

// export interface ConfigContext {
//     config: Config  
//     setConfig: (config: Config)=> void 
// }