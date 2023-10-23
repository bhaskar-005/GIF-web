import React from 'react';
import { useState ,useEffect} from 'react';
import axios from 'axios';




const userRandomGif = () => {
    const [Randomgif , setRandomgif] = useState('')
    const [loading ,setloading] = useState(false)
    const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW'
    
    async function fetchRandomdata(){
      
       setloading(true)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const output = await axios.get(url);
        const img = output.data.data.images.downsized_large.url;
    
        setRandomgif(img);
        console.log(Randomgif);
        setloading(false);
       
       
    }
    
    useEffect(()=>{
        fetchRandomdata();
    }, []);
    
     return {Randomgif,loading,fetchRandomdata};
     
    }
    


export default userRandomGif;
