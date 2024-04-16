import React from 'react'
import "./Home.css"
import mainfood from '/Image/mainfood.png'
const Home = () => {
  return (
    <>
     <div className="container">
     <div className="left_container">
      <h2> A LOT OF FOOD</h2>
     </div>

      <div className="right_container">
      <img src={mainfood} alt="" />
     
           </div>
     </div>
      
    </>
  )
}

export default Home;

