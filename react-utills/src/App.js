import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setmode] = useState('light')

  const [btnText, setbtnText] = useState("Dark Mode")

  const toggleChange=()=>{
    if(mode === 'light'){
      setmode ('dark')
      document.body.style.backgroundColor = 'grey'
      document.body.style.color = 'white'
      setbtnText('Light Mode')
    }
    else{
      setmode ('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      setbtnText('Dark Mode')
    }
  }
  return (
    <div className="App">
      <>
        <Navbar title="TextUtils" aboutUs="About Utils" mode={mode} toggleChange={toggleChange} btnText={btnText}/>
        <div className="container">
          <TextForm heading="Type Your Text 2" mode={mode} />
        </div>
        {/* <About /> */}
      </>
    </div>
  );
}
export default App;
