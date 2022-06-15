
import { useState } from 'react';
import '../App.css';



const Functioncomponent = () =>{
   
    const [show,setShow] = useState(true)
    
 return(
    <>
    <button className="function" onClick={() =>setShow(!show)}>
        To see styling in functional component
        </button>
{
    show ?
      null : <div className='function-box'>
      <h1>This is created using functional components</h1>
      <p>This is done by external CSS</p>
      <p style={{color:"blue"}}>This is done by internal css</p>
  </div>
}
       
    </>
   
 )
}

export default Functioncomponent;