import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setmode] = useState('light')

  const [btnText, setbtnText] = useState("Dark Mode")

  const [alert, setAlert] = useState(null)

  const showAlert = (message , type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleChange=()=>{
    if(mode === 'light'){
      setmode ('dark')
      document.body.style.backgroundColor = 'grey'
      document.body.style.color = 'white'
      setbtnText('Light Mode')
      showAlert("dark mode enabled" , "success")
    }
    else{
      setmode ('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      setbtnText('Dark Mode')
      showAlert("light mode enabled" , "success")
    }
  }
  return (
    <div className="App">
      <>
        <Navbar title="TextUtils" aboutUs="About Utils" mode={mode} toggleChange={toggleChange} btnText={btnText}/>
        <Alert alert={alert}/>
        <div className="container">
          <TextForm showAlert={showAlert} heading="Type Your Text 2" mode={mode}/>
        </div>
        {/* <About /> */}
      </>
    </div>
  );
}
export default App;
