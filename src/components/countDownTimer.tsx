import ShowCounter from './showCounter';
import ButtonsPanel from './buttonsPanel';
import { useCountDown } from '../hooks/useCountDown';
import { PomodoroOutput } from '../global/types';


const CountdownTimer = () => {
    
    const pomodoroOutput : PomodoroOutput = useCountDown();
    
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