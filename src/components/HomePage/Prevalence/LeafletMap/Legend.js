import React from "react";
import "./Legend.css";

const Legend = () => {
  return (
    <div className="legend">
      <h4 className="legend-title">Prevalence(%)</h4>
      <div style={{ "--color": "#67000d" }}>{">"} 6.5</div>
      <div style={{ "--color": "#a50f15" }}>5.5 - 6.4</div>
      <div style={{ "--color": "#cb181d" }}>4.5 - 5.4</div>
      <div style={{ "--color": "#ef3b2c" }}>3.5 - 4.4</div>
      <div style={{ "--color": "#fb6a4a" }}>2.5 - 3.4</div>
      <div style={{ "--color": "#fc9272" }}>1.5 - 2.4</div>
      <div style={{ "--color": "#fcbba1" }}>0.5 - 1.4</div>
      <div style={{ "--color": "#fee0d2" }}>0.1 - 0.4</div>
      <div style={{ "--color": "#fff5f0" }}> {"<"} 0.1</div>
    </div>
  );
};
export default Legend;