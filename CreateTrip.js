import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../context/UserContext";
import "./CreateTrip.css";

export default function CreateTrip() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [fromPlace, setFromPlace] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [budget, setBudget] = useState(0); // number

  // Calculate number of days (inclusive)
  let noOfDays = 0;
  if (dates.length === 2 && dates[0] && dates[1]) {
    const start = new Date(dates[0].setHours(0, 0, 0, 0));
    const end = new Date(dates[1].setHours(0, 0, 0, 0));
    const diffTime = end.getTime() - start.getTime();
    noOfDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  }

  return (
    <div className="create-trip-page">
      <h1>Create a Trip</h1>
      <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
      <div className="create-trip-container">
        <div className="calendar-container">
          <h3>Select Trip Dates</h3>
          <Calendar selectRange={true} onChange={setDates} value={dates} />
          {dates.length === 2 && <p>No. of Days: {noOfDays}</p>}
        </div>

        <div className="trip-form">
          <h3>Trip Details of {user.username}</h3>
          <label>From:</label>
          <input
            type="text"
            value={fromPlace}
            onChange={(e) => setFromPlace(e.target.value)}
            placeholder="Enter source"
          />
          <br />
          <label>To:</label>
          <input
            type="text"
            value={toPlace}
            onChange={(e) => setToPlace(e.target.value)}
            placeholder="Enter destination"
          />
          <br />
          <label>Enter Budget:</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            placeholder="Enter your budget"
          />

    <button
  className="create"
  onClick={() => {
    // Store all key trip details
    localStorage.setItem("fromPlace", fromPlace);
    localStorage.setItem("toPlace", toPlace);
    localStorage.setItem("tripBudget", budget);

    navigate("/book-transport");
  }}
>
  Book Transportation
</button>

        </div>
      </div>
    </div>
  );
}
