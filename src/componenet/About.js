import React,{useState} from "react";

export default function About() {
     const [Mode, setMode] = useState(
         {
             color:'black',
             backgroundColor:'white'
         }
     )
     const [modeText, setModeText] = useState("Enable Dark Mode")
    const mode=()=>{
           if( Mode.color== 'white'){
               setMode({
                color:'black',
                backgroundColor:'white',
                border:'1px solid black'
               })
               setModeText('Enable Dark Mode')
           }else{
            setMode({
                color:'white',
                backgroundColor:'black',
                border:'1px solid red'
               })
               setModeText('Enable Light Mode')
           }
    }
  return (
    <>
    <h1 className="mt-4">Dark and Light Mode:-</h1>
      <div className="card  mb-3" style={Mode}>
        <div className="row  mx-0 " style={Mode} >
          <div className="card-header col-10">Header</div>
          <div className="form-check form-switch col-2 py-2">
          <label className="form-check-label" for="flexSwitchCheckChecked">
              {modeText}
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={mode}
            />
          </div>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
}
