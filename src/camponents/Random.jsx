import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import userRandomGif from '../hook/userRandomGif';
import '../css Folder/StyleRandom.css'

const Random = () => {

const {Randomgif,loading,fetchRandomdata}=userRandomGif();

function clickhandler(){
  fetchRandomdata()
}

  return (
    <div className='Main-div'>
      <h1 className='text'>Random gif</h1>
      <div className='div-img'>{
      loading ?(<Loading/>):( <img src={Randomgif} className='imageRan'alt="not able to load" />)
      }</div>

      <button onClick={clickhandler} className='buttonGen'>Generate</button>
     
    </div>
  );
}

export default Random;
