import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const click = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const clickLo = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const clickClear = () => {
    setText("");
  };
  const clickCopy = () => {
    // let area = document.getElementById("exampleFormControlTextarea1");
    // area.select();
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
  };

  const capitalize = () => {
    let firstchar = text.charAt(0); // storing the first char of the string
    let newText = firstchar.toUpperCase(); // converting that to uppercase
    setText(newText + text.slice(1)); // printing it with rest excluding the first char by using slice
  };

//   const clickRemoveSpace = () => {
// let newtext =text.split(/[]+/);
// setText(newtext);
//   };

  const capitalizeAll = () => {
    let arr = text.toString().split(" ");
    let i;
    for (i = 0; i < arr.length; i++) {
      let word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      arr[i] = word;
    }
    let sentense = arr.toString().replace(/,/g, " ");
    setText(sentense);
  };

  const change = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <h1 className="my-4">{props.heading}</h1>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            value={text}
            onChange={change}
          ></textarea>
          <div className="btn btn-outline-primary mt-3 mx-1" onClick={click}>
            To-UpperCase
          </div>
          <div className="btn btn-outline-primary mt-3 mx-1" onClick={clickLo}>
            To-LowarCase
          </div>
          <div
            className="btn btn-outline-primary mt-3 mx-1"
            onClick={clickClear}
          >
            Clear
          </div>
          <div
            className="btn btn-outline-primary mt-3 mx-1"
            onClick={clickCopy}
          >
            Copy
          </div>
            {/* <div
              className="btn btn-outline-primary mt-3 mx-1"
              onClick={clickRemoveSpace}
            >
            Remove Space
            </div> */}
          {/* <div className="btn btn-outline-primary mt-3 mx-1" onClick={clickTrim} >Trim </div>  */}
          <div
            className="btn btn-outline-primary mt-3 mx-1"
            onClick={capitalize}
          >
            capitalize
          </div>
          <div
            className="btn btn-outline-primary mt-3 mx-1"
            onClick={capitalizeAll}
          >
            capitalizeAll
          </div>
        </div>
        <h3 className="my-4">Counter</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} word And {text.length} Charector
        </p>
        <p>
          You Can Read The Text in <b> {0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} </b>Min{" "}
        </p>
        <h3>Preview</h3>
        <p>{text.toString().length>0?text:"! Nothing To  Preview "}</p>
      </div>
    </>
  );
}
