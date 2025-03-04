import React, {useState} from 'react';


export default function TextForm(props) {

    const [text, setText]=useState("");
    
    const handleUpCase=()=>{
       let newText=text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to Upper case", "success")

      //  if(text=== ""){
      //   alert('Text not Availabe to Convert Uppercase')
      //  }

      

    }
    const handleonChange=(e)=>{
        setText(e.target.value);
        

    }
    const handleLoCase=()=>{
        let newText=text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case", "success")
      //   if(text=== ""){
      //   alert('Text not Availabe to Convert LowrCase')
      //  }
    }
    const handleClearCase=()=>{
        
        if(text ===""){
            alert('Pls Enter')
           }
           else{
            setText("");
           }
        
    }

    const handleCopy=()=>{
      let text=document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    
  //   if(text.value=== ""){
  //     alert('text not available to copy')
  //   }
  //   else{
  //   alert("copied")
  //  }
    }

    const handleExtraCase=()=>{
      let newText=text.split(/[ ]+/)
      setText(newText.join(" "))
      if(text ===""){
        alert('pls enter text')
      }
      
    }

  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>

    <div className="mb-3"><textarea  style={{backgroundColor:props.mode ==='dark'?'#5b9fbf':'white', color:props.mode ==='dark'?'white':'black'}} value={text} onChange={handleonChange} className="form-control" id="myBox" rows="8"></textarea>
    </div>

    <button className="btn btn-primary" onClick={handleUpCase}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-5" onClick={handleLoCase}>Convert to Lowercase</button>
    <button className="btn btn-primary me-5" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary  me-5" onClick={handleClearCase}>Clear Text</button>
    <button className="btn btn-primary " onClick={handleExtraCase}>Extra Space Remove</button>

    </div>

    <div className="container my-5" style={{color: props.mode ==='dark'?'white':'black'}}>
    <h1>Your text Summery</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} Character</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h2>Priview</h2>
    <p>{text.length>0?text:"enter text first"}</p>
    </div>
    </>
  );
}
