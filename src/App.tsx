import './App.css';
import CountdownTimer from './components/countDownTimer';
import { PomodoroInput } from './global/types';
import Navbar from './components/Navbar';

function App() {

  const pomodoroInput: PomodoroInput ={
    pamadoreDuration: 25, 
    breakDuration: 5,
    type: 'Focus',
    status: 'Start'
  }

  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <h1>Pomodoro</h1>
        <CountdownTimer {...pomodoroInput} />
      </header>
    </div>
  );
}

export default App;
