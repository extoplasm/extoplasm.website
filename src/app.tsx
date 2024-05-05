import { useState } from 'react';
import './css/app.css'
import userIcon from './assets/user-icon.svg'
import terminalIcon from './assets/terminal-icon.svg'
import terminalIconActive from './assets/terminal-icon-active.svg'
import emptyIcon from './assets/empty-icon.svg'

function App() {
  const [clicked, setClicked ] = useState(0)
  return (
  <>
    <div id="scene1">
      <div id="login">
        <img src={userIcon} alt="user icon"/>
        <p>extoplasm</p>
        <button onClick={(() => {
          document.getElementById('scene1')!.style.visibility = 'hidden';
          setTimeout(()=> {
            document.getElementById('scene2')!.style.visibility = 'visible';
          }, 1000)
        })}>log in</button>
      </div>
    </div>
    <div id="scene2">
      <div id="sidebar">
        <button onClick={(()=> {
          setClicked(clicked ? 0 : 1)
        })}>
          <div id="icon">
            <img src={clicked ? terminalIconActive : emptyIcon} alt="active" id='active-dot'/>
            <img src={terminalIcon} alt="terminal icon" />
          </div>
        </button>
      </div>
    </div>
  </>
  )
}

export default App
