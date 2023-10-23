import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import useGif from "../hook/useGif";
import "../css Folder/StyleTagname.css";

const Tagname = () => {
  const [tag, settag] = useState("");

  const { gif, loading, fetchdata } = useGif(tag);
  //wey to get data from custom hook

  const changeInput = (event) => {
    settag(event.target.value);
  };
  function clickhandler() {
    fetchdata();
    console.log(tag);
  }

  return (
    <div className="Main-divs">
      <h1 className="text">Search gif</h1>
      <div className="div-img">
        {loading ? (
          <Loading />
        ) : (
          <img src={gif} className="imageRan" alt="not able to load" />
        )}
      </div>
      <div className="input-button">
        <input className="input-text"type="text" onChange={changeInput} placeholder="Text" />
        <button onClick={clickhandler} className="buttonTag">
          Generate
        </button>
      </div>
    </div>
  );
};
export default Tagname;
