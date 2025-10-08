import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./BookTransport.css";

export default function BookTransport() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [transportOptions, setTransportOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [remainingBudget, setRemainingBudget] = useState(
    Number(localStorage.getItem("tripBudget") || 0)
  );

  useEffect(() => {
    fetch("/mockflights.json") // your mock flights file in public folder
      .then((res) => res.json())
      .then((data) => setTransportOptions(data.flights || []))
      .catch((err) => console.error("Error fetching transport options:", err));

    // Restore previously selected transport from localStorage
    const tripInfo = JSON.parse(localStorage.getItem("tripInfo")) || {};
    if (tripInfo.transport) {
      setSelectedOption(tripInfo.transport);
      setRemainingBudget(tripInfo.remainingBudget || Number(localStorage.getItem("tripBudget") || 0));
    }
  }, []);

  const handleSelect = (option) => {
    if (selectedOption && selectedOption.name === option.name) {
      setSelectedOption(null);
      setRemainingBudget(Number(localStorage.getItem("tripBudget")));
    } else {
      setSelectedOption(option);
      setRemainingBudget(
        Number(localStorage.getItem("tripBudget")) - Number(option.price)
      );
    }
  };
const handleConfirm = () => {
  if (!selectedOption) {
    alert("Please select a transport option first!");
    return;
  }

  const tripInfo = {
    username: user.username,
    fromPlace: localStorage.getItem("fromPlace") || "Unknown",
    toPlace: localStorage.getItem("toPlace") || "Unknown",
    originalBudget: Number(localStorage.getItem("tripBudget")) || 0,
    remainingBudget,
    transport: selectedOption,
  };

  localStorage.setItem("tripInfo", JSON.stringify(tripInfo));

  alert(
    `You booked ${selectedOption.name} for $${selectedOption.price}.\nRemaining Budget: $${remainingBudget}`
  );
};

  

  const goToHotelBooking = () => {
    if (!selectedOption) {
      alert("Please select and confirm a transport option before booking hotels!");
      return;
    }
    navigate("/book-hotel");
  };

  return (
    <div className="book-transport-page">
      <h1>Book Transport for {user.username}</h1>
      <p>Remaining Budget: ${remainingBudget}</p>

      <div className="transport-list">
        {transportOptions.map((option, i) => (
          <div
            key={i}
            className={`transport-card ${
              selectedOption === option ? "selected" : ""
            }`}
            onClick={() => handleSelect(option)}
          >
            <h3>{option.name}</h3>
            <p>Departure: {option.departure}</p>
            <p>Arrival: {option.arrival}</p>
            <p>Price: ${option.price}</p>
          </div>
        ))}
      </div>

      <button className="create" onClick={handleConfirm}>
        Confirm Transport
      </button>

      <button
        className="create hotel-btn"
        onClick={goToHotelBooking}
      >
        Book Hotels
      </button>
    </div>
  );
}
