export default function WeatherDisplay({ temp }) {
  return (
    <div>
      <p style={{ color: temp.temperature > 20 ? "red" : "blue" }}>
        {temp.temperature}
      </p>
      <p>{temp.conditions}</p>
    </div>
  );
}
