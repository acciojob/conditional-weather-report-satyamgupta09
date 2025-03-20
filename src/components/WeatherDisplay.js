import React from "react";
export default function WeatherDisplay({ temp }) {
  return (
    <div>
      <span>
      <p style={{ color: temp.temperature > 20 ? "red" : "blue" }}>
        {temp.temperature}
      </p>
      <p>{temp.conditions}</p>
      </span>
    </div>
  );
}
