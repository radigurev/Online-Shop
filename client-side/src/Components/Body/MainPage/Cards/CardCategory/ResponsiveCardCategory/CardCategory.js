import React from "react";

import './CardCategory.scss';

function CardCategory() {
    return (
        <div className="main">
        <div className = "card">
        <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt=""/>
        <div className="card-content">
          <h2>
            Card Heading
          </h2>
          <p>
            aaaa
          </p>
          <a href="#" className="button">
            Find out more 
            <span className="material-symbols-outlined">
             
            </span>
          </a>
        </div>
      </div>
      </div>
    );
};

export default CardCategory;