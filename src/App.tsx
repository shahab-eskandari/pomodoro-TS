import '../src/style/global.css';
import CountdownTimer from './components/countDownTimer';
import { PomodoroInput } from './global/types';
import Navbar from './components/Navbar';
import ThemeContextWrapper from './context/themeContextWrapper';
import {useState} from 'react';
import Drawer from './components/Drawer'; 

function App() {

  const pomodoroInput: PomodoroInput ={
    pamadoreDuration: 25, 
    breakDuration: 5,
    type: 'Focus',
    status: 'Start'
  }

  const [isOpen, setIsOpen]=useState(false);
  
  function handleOpenDrawer(state:boolean){
    setIsOpen(state);
    console.log(isOpen); 
  } 

  return (
    <ThemeContextWrapper>
      <div className="container">
        <Navbar openDrawer={handleOpenDrawer}/>
        <Drawer isOpen={isOpen} className='' position='left' removeContentWhileClosed={true} onClose={()=>setIsOpen(false)}>
          <h1>Drawer Content</h1>
        </Drawer>
        <header className="App-header">
          <h1>Pomodoro</h1>
          <CountdownTimer {...pomodoroInput} />
        </header>
      </div>
    </ThemeContextWrapper>
  );
}

export default App;
