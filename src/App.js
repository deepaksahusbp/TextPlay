import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(()=>{
        setAlert(null);
      },2500);
  }
  const toggleMode = ()=>{
    // console.log("toggle");
    // console.log(mode);
    if(mode==='light'){
      setMode('dark');
      showAlert("Dark Mode Enabled","Success");
    }
    else{
      setMode('light');
      showAlert("Light Mode Enabled","Success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Play With Text" mode={mode} toggleMode={toggleMode} aboutText="About"/>
    <div className="container" style={{backgroundColor : mode==='dark'?'grey':'white'}}>
    <Alert alert={alert}/>
    <Switch>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/">
            <TextForm heading="Change Case | Count Words | Count Spaces | Remove Extra Spaces | Text to Speech | Speech to Text" mode={mode} showAlert={showAlert}/>
          </Route>
    </Switch>
    </div>
    <Footer/>
    </Router>    
    </>
  );
}

export default App;
