
 import React, { useState } from "react";
import "./HouseLayout.css";
import { FaHome, FaDumbbell, FaHospital, FaUtensils } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HouseLayout = () => {
  const [layout, setLayout] = useState([]);
  const [recommendedHouse, setRecommendedHouse] = useState(null);
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [selectedPlotType, setSelectedPlotType] = useState("");
  const [numRows, setNumRows] = useState(0);
  const [numColumns, setNumColumns] = useState(0);
  const navigate = useNavigate();
 


  const createLayout = (rows, cols) => {
    const newLayout = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({ type: "", label: "" }))
    );
    setLayout(newLayout);
  };

  const assignPlot = (row, col, type, label) => {
    if (type === "House") {
      const houseLabel = prompt("Enter a label for the house:");
      label = houseLabel ? `House ${houseLabel}` : "";
    }

    const updatedLayout = [...layout];
    updatedLayout[row][col] = { type, label };
    setLayout(updatedLayout);
  };

  const handlePlotTypeSelection = (plotType) => {
    setSelectedPlotType(plotType);
  };

  const recommendHouse = () => {
    setRecommendedHouse(null);
    let maxScore = -Infinity;
    let bestHouseLabel = "";

    for (let row = 0; row < layout.length; row++) {
      for (let col = 0; col < layout[row].length; col++) {
        const plot = layout[row][col];
        if (plot.type === "House") {
          let score = 0;

          // Check the presence of services in the adjacent plots
          if (row > 0 && layout[row - 1][col].type !== "") {
            score += 1; // Increase the score if a service is present
          }
          if (row < layout.length - 1 && layout[row + 1][col].type !== "") {
            score += 1;
          }
          if (col > 0 && layout[row][col - 1].type !== "") {
            score += 1;
          }
          if (col < layout[row].length - 1 && layout[row][col + 1].type !== "") {
            score += 1;
          }

          // Update the best-suited house if the score is higher
          if (score > maxScore) {
            maxScore = score;
            bestHouseLabel = plot.label;
          }
        }
      }
    }

    setRecommendedHouse(bestHouseLabel);
  };

  const handleNumRowsChange = (event) => {
    const value = parseInt(event.target.value);
    setNumRows(value);
  };

  const handleNumColumnsChange = (event) => {
    const value = parseInt(event.target.value);
    setNumColumns(value);
  };

  const handleCreateLayout = () => {
    createLayout(numRows, numColumns);
    setShowAddOptions(true);
  };
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h3>Enter no.of rows and columns</h3>
        <div className="slider-container">
          <label htmlFor="numRowsSlider">Number of Rows: {numRows}</label>
          <input
            type="range"
            id="numRowsSlider"
            min="0"
            max="15"
            value={numRows}
            onChange={handleNumRowsChange}
          />
        </div>
        <div className="slider-container">
          <label htmlFor="numColumnsSlider">Number of Columns: {numColumns}</label>
          <input
            type="range"
            id="numColumnsSlider"
            min="0"
            max="15"
            value={numColumns}
            onChange={handleNumColumnsChange}
          />
        </div>
      </div>

      <div className="housing-layout-container">
        <h1 className="header">Housing Layout</h1>
        <button onClick={handleGoBack} className="back-button">
          Back
        </button>

        <div className="buttons">
          <button onClick={handleCreateLayout}>Create Layout</button>
          <button onClick={recommendHouse}>Recommend House</button>
        </div>

        {showAddOptions && (
          <div>
            <div className="plot-types">
              <button
                onClick={() => handlePlotTypeSelection("House")}
                className="plot-type-button-house"
              >
                <FaHome className="icon" />
                Add House
              </button>
              <button
                onClick={() => handlePlotTypeSelection("Gym")}
                className="plot-type-button-gym"
              >
                <FaDumbbell className="icon" />
                Add Gym
              </button>
              <button
                onClick={() => handlePlotTypeSelection("Restaurant")}
                className="plot-type-button-res"
              >
                <FaUtensils className="icon" />
                Add Restaurant
              </button>
              <button
                onClick={() => handlePlotTypeSelection("Hospital")}
                className="plot-type-button-hospital"
              >
                <FaHospital className="icon" />
                Add Hospital
              </button>
            </div>

            <div className="layout">
              {layout.map((row, rowIndex) => (
                <div key={rowIndex} className="housing-layout-row">
                  {row.map((plot, colIndex) => (
                    <div
                      key={colIndex}
                      className={`housing-layout-plot ${
                        plot.type ? "plot-" + plot.type : ""
                      }`}
                      onClick={() =>
                        assignPlot(rowIndex, colIndex, selectedPlotType, "")
                      }
                    >
                      <span>{plot.label}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {showAddOptions && recommendedHouse !== null && (
  <div className="recommended-house">
    <h3>Recommended House:</h3>
    <span>{recommendedHouse}</span>
  </div>
)}

          </div>
        )}
      </div>
    </div>
  );
};

export default HouseLayout;





