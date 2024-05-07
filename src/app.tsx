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
          setTimeout(() => {
            document.getElementById('scene2')!.style.visibility = 'visible';
          }, 1000)
        })}>log in</button>
      </div>
    </div>
    <div id="scene2">
      <div id="sidebar">
        <button onClick={(()=> {
          setClicked(clicked ? 0 : 1);
          (document.querySelector('#scene2 > #sidebar > button') as any)!.disabled = true;
          document.getElementById('terminal-window')!.style.visibility = 'visible';
          let i = 0
          let text = './index.html'
          const typingEffect  = () => {
            if (i < text.length) {
              document.querySelector('#terminal-window > #terminal-window-content > #terminal-text')!.innerHTML += text.charAt(i);
              i++;
              setTimeout(typingEffect, 50)
            }
          }
          setTimeout(typingEffect, 1000);
          setTimeout(() => {document.getElementById('website-window')!.style.visibility = 'visible'}, 2500)
        })}>
          <div id="icon">
            <img src={clicked ? terminalIconActive : emptyIcon} alt="active" id='active-dot'/>
            <img src={terminalIcon} alt="terminal icon" />
          </div>
        </button>
      </div>
    </div>
    <div id="terminal-window">
      <div id="terminal-window-header">
        <p>terminal</p>
        <p>x</p>
      </div>
      <div id="terminal-window-content">
        <p id="terminal-text">extoplasm:-$ </p>
      </div>
    </div>
    <div id="website-window">
      <div id="website-window-header">
        <p>index.html</p>
        <p>x</p>
      </div>
      <div id="website-window-content">
        <h1>extoplasm</h1>
        <p>i (sometimes) code stuff</p>
      </div>
    </div>
  </>
  )
}

export default App
