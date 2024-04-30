import React from "react";
import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ChooseAvatar() {
  const URL = "https://questions-server.adaptable.app/users";
  const navigate = useNavigate();

  const newUser = {
    id: Date.now(),
  };

  const handleClick = (e) => {
    axios.post(URL, newUser).then((resp) => {
      navigate("/");
    });
  };
  return (
    <div className="choose-avatar">
      <h1>Tell us who you are</h1>
      <img src={avatar1} alt="image1" onClick={handleClick} width={50} />
      <img src={avatar2} alt="image2" onClick={handleClick} width={50} />
      <img src={avatar3} alt="image3" onClick={handleClick} width={50} />
    </div>
  );
}

export default ChooseAvatar;