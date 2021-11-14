import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  return (
    <div className="App">
      <>
        <Navbar title="TextUtils" aboutUs="About Utils" />
        <div className="container">
          <TextForm heading="Type Your Text" />
        </div>
        {/* <About /> */}
      </>
    </div>
  );
}
export default App;
