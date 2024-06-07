
import './App.css';
import {Navbar}  from './components/Navbar';
import {Sidebar} from './components/Sidebar';
import {Hamburger} from '@fluentui/react-nav-preview';

import { useState } from 'react';




function App() {

 

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="App">
     <Navbar></Navbar>
   <div className="root">

   

    <Sidebar isOpen={isOpen}></Sidebar>  


    <div className="content">
    {isOpen && <Hamburger onClick={() => setIsOpen(false)} />}
    {!isOpen && <Hamburger onClick={() => setIsOpen(true)} />}  
    <h1>Test Fluent UI</h1>
    </div>

</div>
    
   

    </div>
  );
}

export default App;
