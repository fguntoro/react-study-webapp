import React from "react";
import "./Legend.css";

const Legend = () => {
  return (
    <div className="legend">
      <h4>Prevalence</h4>
      <div style={{ "--color": "#67000d" }}>{">"} 0.065</div>
      <div style={{ "--color": "#a50f15" }}>0.055 - 0.064</div>
      <div style={{ "--color": "#cb181d" }}>0.045 - 0.054</div>
      <div style={{ "--color": "#ef3b2c" }}>0.035 - 0.044</div>
      <div style={{ "--color": "#fb6a4a" }}>0.025 - 0.034</div>
      <div style={{ "--color": "#fc9272" }}>0.015 - 0.024</div>
      <div style={{ "--color": "#fcbba1" }}>0.005 - 0.014</div>
      <div style={{ "--color": "#fee0d2" }}>0.001 - 0.004</div>
      <div style={{ "--color": "#fff5f0" }}> {"<"} 0.010</div>
    </div>
  );
};
export default Legend;