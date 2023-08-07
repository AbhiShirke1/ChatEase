import logo from './logo.svg';
import './App.css';
import { Button } from '@chakra-ui/react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';
import { useState } from 'react';

function App() {
  // let c = 0;
  // const [num, setNum] = useState("");
  // const handle = (e) => {
    
  //   if(num.length<3){
  //     setNum(e.target.value)
  //   }

  //   else if(num.length==3)
  //   setNum( "(" + num.slice(0, 4) +  ") ")

  //   else{
  //     if(num.length<9){
  //       setNum(e.target.value)
  //     }

  //     if(num.length==9){
  //       setNum(num + "- ")
  //     }

  //     else if(num.length<15){
  //       setNum(e.target.value)
  //     }
  //   }

  // }

  return (
    <div className="App">
      <Route path='/' component={Homepage} exact></Route>
      <Route path='/chats' component={Chatpage}></Route>
      

      {/* <input type="text" name="" id="" onChange={handle} value={num} /> */}
    </div>
  );
}

export default App;
