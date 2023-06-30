import React from "react";

import "./CardCategory.scss";

function StaticCardCategory() {
    return (
      <div className="main">
          <div className="card">
            <div className="cover item-b">
              <h1>
                Tropical
                <br />
                Leaf
              </h1>
              <span className="price">$35</span>
            </div>
        </div>
      </div>
    );
}

export default StaticCardCategory;