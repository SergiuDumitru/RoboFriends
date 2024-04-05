import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";
import { robots } from "./robots.js";



const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) =>{
        return (<Card 
        key={robots[i].id}  
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email} 
        />)
    })
  return (
    <div>
        {cardComponent}
    </div>
  );
};

export default CardList;
