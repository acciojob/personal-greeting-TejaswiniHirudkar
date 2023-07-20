
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName]=useState('');
  const [greeting, setGreeting]=useState('')

  const handleNamechange = (e)=>{
    setName(e.target.value);
  }

  const handleGreeting = ()=>{
    setGreeting('${name}');
  }

  return (
    <div>
        {/* Do not remove the main div */}
      <label>Enter your name:</label>
      <input type='text' value={name} id='nameInput' onChange={handleNamechange}></input>
      <p>Hello {greeting}!</p>
    </div>
  )
}

export default App
