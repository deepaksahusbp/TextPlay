import { useState } from "react"
import {useSpeechSynthesis} from 'react-speech-kit'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';

    

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const {speak}=useSpeechSynthesis();
    const {transcript} = useSpeechRecognition();
    
    if(!SpeechRecognition.browserSupportsSpeechRecognition()){
        return null;
    }
    const handleSpeech =()=>{
        setText(transcript);
    }
    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText);   
        props.showAlert("Converted to Upper case","Success");
    }
    const handleLowClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText);   
        props.showAlert("Converted to Lower case","Success");
    }
    const handleClearClick = ()=>{
        let newText= "";
        setText(newText);   
        props.showAlert("Text Cleared","Success");
    }
    const handleCopy = ()=>{
        let newText= document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied","Success");
    }
    const handleExtraSpaces = (event)=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","Success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
  return (
    <div style={{backgroundColor : props.mode==='dark'?'grey':'white', padding:0}}>
    <div>
        <div>
            <h2>
            <label htmlFor="myBox" className="form-label">{props.heading}</label>
            </h2>
        
            <textarea className='form-control' onChange={handleOnChange} value={text} id="myBox" rows="6"></textarea>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-1'  onClick={handleUpClick}>Convert to Upper Case</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-1'  onClick={handleLowClick}>Convert to Lower Case</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-1'  onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-1'  onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-1'  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-1'  onClick={()=>speak({text:text})}>Text to Speech</button>
            <button className='btn btn-primary my-2 mx-1' onClick={handleSpeech} onMouseDown={SpeechRecognition.startListening} onMouseUp={SpeechRecognition.stopListening}>
                Speech to Text
            </button>
        </div>
    </div>
    <div>
        <h3>Word Counter</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words {text.length} Characters.</p>
        <p>Time needed to read it is {text.split(/\s+/).filter((element)=>{return element.length!==0}).length*0.008} minutes</p>
        <h3>Your Preview</h3>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
    </div>
    </div>
  )
}  
