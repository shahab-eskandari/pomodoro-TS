type pomodoroType = 'Focus' | 'Break';
type pomodoroStatus = 'Start' | 'Running' | 'Paused' | 'Finished';

export interface PomodoroInput {
    pamadoreDuration: number 
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