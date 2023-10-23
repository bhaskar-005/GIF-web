import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const useGif = (tag) => {
  const [gif, setgif] = useState("");
  const [loading, setloading] = useState(false);
  const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW'

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const fetchImgdata = async () => {
    setloading(true);
    const output = await axios.get(url);
    const img = output.data.data.images.downsized_large.url;
    setgif(img);
    setloading(false);
  };


  async function fetchdata() {
    if (!tag) {
      toast.error("Enter text !", {
        position: toast.POSITION.BOTTOM_TOP,
        className: "toast-message",
      });
      
    } else { 
       setloading(true);
      fetchImgdata();
    }
  }

  useEffect(() => {
    fetchImgdata();
  }, []);
  //we got all the common things we have to usein code 
  return { gif, loading, fetchdata };
  //useing return we pass these values
};

export default useGif;
