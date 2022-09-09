import '../src/style/global.css';
import CountdownTimer from './components/countDownTimer';
import Navbar from './components/Navbar';
import ThemeContextWrapper from './context/themeContextWrapper';
import {useState} from 'react';
import Drawer from './components/Drawer';
import Setting from './components/Setting';
import ConfigContextWrapper from './context/configContextWrapper';


function App() {

  const [isOpen, setIsOpen]=useState(false);
  
  function handleOpenDrawer(state:boolean){
    setIsOpen(state);
  } 

  return (
    <ThemeContextWrapper>
      <ConfigContextWrapper>
        <div className="container">
          <Navbar openDrawer={handleOpenDrawer}/>
          <Drawer isOpen={isOpen} className='' position='left' removeContentWhileClosed={true} onClose={()=>setIsOpen(false)}>
            <Setting openDrawer={handleOpenDrawer}/>
          </Drawer>
          <header className="App-header">
            <h1>Pomodoro</h1>
            <CountdownTimer/>
          </header>
        </div>
      </ConfigContextWrapper>
    </ThemeContextWrapper>
  );
}

export default App;
