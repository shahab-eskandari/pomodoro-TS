import ShowCounter from './showCounter';
import ButtonsPanel from './buttonsPanel';
import { useCountDown } from '../hooks/useCountDown';
import { PomodoroInput, PomodoroOutput } from '../global/types';


const CountdownTimer = (pomodoroInput: PomodoroInput) => {
    
    const pomodoroOutput : PomodoroOutput = useCountDown (pomodoroInput)

    return (
        <div>
            <div>
                <ShowCounter countDown={pomodoroOutput.countDown}/>
            </div>
            <div>
                <ButtonsPanel {...pomodoroOutput}/>
            </div>
        </div>
    );
}

export default CountdownTimer;