import React, { useState, useEffect } from 'react';
import './Inventory.css';

function Inventory() {
  const [totalWaste, setTotalWaste] = useState(75);
  const [bioWaste, setBioWaste] = useState(65);
  const [eWaste, setEWaste] = useState(30);

  return (
    <div className="inventory">
      <h1>Inventory</h1>
      <div className="firstHalf">
        <div className="total">
          <p>Total Waste:</p>
          <div className="progress-wrapper">
            <svg className="progress-ring" width="160" height="160">
              <circle
                className="progress-ring__circle"
                stroke="gray"
                strokeWidth="20"
                fill="transparent"
                r="50"
                cx="100"
                cy="60"
              />
              <circle
                className="progress-ring__progress"
                stroke="blue"
                strokeWidth="20"
                fill="transparent"
                r="50"
                cx="100"
                cy="60"
                style={{ strokeDashoffset: totalWaste }}
              />
            </svg>
            <div className="progress-text">{totalWaste}%</div>
          </div>
        </div>
        {/* Similar for bioWaste, eWaste, and plastic */}
      </div>
    </div>
  );
}

export default Inventory;
