import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe autem nam doloribus itaque similique modi, consequuntur aperiam maxime quas?</p>
        <button onClick={handleJoinUs} className="join-button">Join Us</button>
       
        
      </div>
      <div className="right-section">
        <img src="https://wpmedia.roomsketcher.com/content/uploads/2022/01/05111052/Apartment-3D-floor-plan-780x670-1.png" alt="House" />
      </div>
    </div>
  );
};

export default Home;


