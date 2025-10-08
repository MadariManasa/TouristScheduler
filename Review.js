import { useEffect, useState } from "react";
import "./Review.css";
export default function Review() {
  const [tripInfo, setTripInfo] = useState({});

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("tripInfo")) || {};
    setTripInfo(info);
  }, []);

  return (
    <div className="review-container">
      <h1>Trip Review</h1>
      <p><strong>Username:</strong> {tripInfo.username}</p>
      <p><strong>From:</strong> {tripInfo.fromPlace}</p>
      <p><strong>To:</strong> {tripInfo.toPlace}</p>
      <p><strong>Original Budget:</strong> ${tripInfo.originalBudget}</p>
      <p><strong>Remaining Budget:</strong> ${tripInfo.remainingBudget}</p>

      <h2>Transport Booked</h2>
      {tripInfo.transport ? (
        <div className="review-card">
          <p><strong>Name:</strong> {tripInfo.transport.name}</p>
          <p><strong>Departure:</strong> {tripInfo.transport.departure}</p>
          <p><strong>Arrival:</strong> {tripInfo.transport.arrival}</p>
          <p><strong>Price:</strong> ${tripInfo.transport.price}</p>
        </div>
      ) : <p>No transport selected</p>}

      <h2>Hotel Booked</h2>
      {tripInfo.hotel ? (
        <div className="review-card">
          <p>{tripInfo.hotel.name}</p>
          <p>Price: ${tripInfo.hotel.price}</p>
        </div>
      ) : <p>No hotel selected</p>}
    </div>
  );
}
