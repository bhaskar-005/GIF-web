import { useState } from 'react'
import Random from './camponents/Random'
import Tagname from './camponents/Tagname'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <ToastContainer />
    <h1 className='navbar' >Gif Generator</h1>
      <div className='mainSection'>
     <Random className="Random"/>
     <Tagname className="tagname" />
   </div></div>
  )
}

export default App
