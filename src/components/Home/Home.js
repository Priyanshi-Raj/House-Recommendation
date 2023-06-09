import React from "react";
import "./Home.css";

import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const handleJoinUs = () => {
        navigate('/house-layout');
      };
  return (
    <div className="container-home">
      <div className="left-section">
        <h2>Want to get the best recommendation for your house by creating your own layout?</h2>
        <p>You can make your own housing layout by allocating positions for house, gym, restaurants and hospitals; and get the best suggestion for house..</p>
        <button onClick={handleJoinUs} className="join-button">Get Recommendation</button>
       
        
      </div>
      <div className="right-section">
        <img src="https://wpmedia.roomsketcher.com/content/uploads/2022/01/05111052/Apartment-3D-floor-plan-780x670-1.png" alt="House" />
      </div>
    </div>
  );
};

export default Home;


