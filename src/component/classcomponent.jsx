import React, {Component} from 'react';
import '../App.css';

class Classcomponent extends Component {
     
    constructor(){
        super()
        this.state = {
            display:false
          
        }
    }

   click = () =>{
        this.setState({
            display:!this.state.display
        })
    }
    
    render(){
        return(
            <>
            <button className="class" onClick={() =>this.click()}>
                To see styling in class component
                </button>
                {
                this.state.display ?
                    
                     
                   <div className='class-box'>
                       <h1>This is created using class components</h1>
                       <p>This is done by external CSS</p>
                       <p style={{color:"blue"}}>This is done by internal css</p>
                   </div>
                   : null
    }
            </>
        )
    }
     }

export default Classcomponent;