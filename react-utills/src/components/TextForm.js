import React , {useState} from 'react'

export default function TextForm(props) {
    
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted To Uppercase" , "success")
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted To Lowercase" , "success")
    }

    const handleClClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Textarea Is Cleaned" , "success")
    }

    const handleCoClick = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Is Copied" , "success")
    }

    const handleFuClick = () =>{
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase + arr[i].slice(1);
        }
        const newText = arr.join(" ");
        setText(newText);
        props.showAlert("First Letters Are Capitilized" , "success")
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className="container my-2">
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleFuClick}>Capitalize First Letter</button>
            <button className="btn btn-primary mx-1" onClick={handleCoClick}>Copy</button>
            <button className="btn btn-primary mx-1" onClick={handleClClick}>Clean The Text</button>
            
        </div>
        <div className="container my-2">
            <h2>Text Summary</h2>
            <p>Your Words Are {text.split(" ").length} And Characters Are {text.length}</p>
            <p>Your Reading Time Is {0.0008 * text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter Something"}</p>
        </div>
        </>
    )
}
