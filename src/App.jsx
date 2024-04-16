import React from "react";
import {Home,About, Navbar,Login,Signup} from './Components'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const App=()=>{
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;