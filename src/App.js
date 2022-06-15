 import './App.css';
  import Classcomponent from './component/classcomponent';
import Functioncomponent from './component/functioncomponent';

function App() {
  return (
    <div className="App">
      <h1 className="head"style={{textShadow:"2px 2px 2px aqua"}}>Styling using functional and class components</h1>
    
      <Functioncomponent />
    
        <Classcomponent/>  
    </div>
   
  );
}

export default App;
