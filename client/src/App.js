import React, { useState } from "react";
import "./App.css";

function App() {
  const [flightId, setFlightId] = useState("");
  const [flightData, setFlightData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:3001/flights/${flightId}/passengers`);
    const data = await response.json();
    setFlightData(data.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Flight ID:
          <input
            type="text"
            value={flightId}
            onChange={(e) => setFlightId(e.target.value)}
          />
        </label>
        <button type="submit">Fetch Data</button>
      </form>
      {flightData && (
        <div className="flight-data">
          <h2>Flight ID: {flightData.flightId}</h2>
          <p>Takeoff: {flightData.takeoffDateTime}</p>
          <p>Landing: {flightData.landingDateTime}</p>
          <h3>Passengers:</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
                <th>Passenger ID</th>
                <th>Seat ID</th>
                <th>Purchase ID</th>
                <th>Seat Type ID</th>
              </tr>
            </thead>
            <tbody>
              {flightData.passengers.map((passenger) => (
                <tr key={passenger.passengerId}>
                  <td>{passenger.name}</td>
                  <td>{passenger.age}</td>
                  <td>{passenger.country}</td>
                  <td>{passenger.passengerId}</td>
                  <td>{passenger.seatId}</td>
                  <td>{passenger.purchaseId}</td>
                  <td>{passenger.seatTypeId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
