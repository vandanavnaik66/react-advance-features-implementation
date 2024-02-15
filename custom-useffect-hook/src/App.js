import { useState } from 'react';
import './App.css';
import { CustomUseEffect } from './CustomUseEffect';

function App() {
const[state,setState]=useState(0);

const incrementFun=()=>{
setState(pre=>pre+1)
}

const decrementFun=()=>{
  if(state<1){
    return;
  }
setState(pre=>pre-1)
  
}

  console.log("outside the useEffect render!!")
CustomUseEffect(()=>{
console.log("inside the useEffect")

return ()=>{ console.log("clean up function")}

},[])

  return (
    <div className="App">
      <h3>{state}</h3>
     <button onClick={incrementFun}>Increment</button>
     <button onClick={decrementFun}>Decrement</button>
    </div>
  );
}

export default App;
