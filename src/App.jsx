import React from "react";
import {Navbar,Login,Signup,Shop} from './Components'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const App=()=>{
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Shop />} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;