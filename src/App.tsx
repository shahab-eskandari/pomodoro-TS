import '../src/style/global.css';
import CountdownTimer from './components/countDownTimer';
import { PomodoroInput } from './global/types';
import Navbar from './components/Navbar';
import ThemeContextWrapper from './context/themeContextWrapper';

function App() {

  const pomodoroInput: PomodoroInput ={
    pamadoreDuration: 25, 
    breakDuration: 5,
    type: 'Focus',
    status: 'Start'
  }

  return (
    <ThemeContextWrapper>
      <div className="container">
        <Navbar/>
        <header className="App-header">
          <h1>Pomodoro</h1>
          <CountdownTimer {...pomodoroInput} />
        </header>
      </div>
    </ThemeContextWrapper>
  );
}

export default App;
