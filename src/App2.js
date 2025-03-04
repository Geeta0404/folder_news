import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 1500);
  };


  const removeBg=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls) => {
    removeBg();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgrounColor= "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgrounColor= "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  // useEffect(() => {
  //   if (mode === 'dark') {
  //     document.body.classList.add('dark-mode');
  //   } else {
  //     document.body.classList.remove('dark-mode');
  //   }
  // }, [mode]);

  return (
    <Router>
      <Navbar title="MainLogo" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5" >
        <Routes>
          <Route exact path="/about" element={<About  mode={mode}/>} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Fill the form" mode={mode}  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
