import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookHotel.css";

export default function BookHotel() {
  const navigate = useNavigate();

  const tripInfo = JSON.parse(localStorage.getItem("tripInfo")) || {};
  const [remainingBudget, setRemainingBudget] = useState(tripInfo.remainingBudget || 0);
  const [hotelOptions, setHotelOptions] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(tripInfo.hotel || null);

  useEffect(() => {
    fetch("/mockhotels.json") // your mock hotels file in public folder
      .then((res) => res.json())
      .then((data) => setHotelOptions(data.hotels || []))
      .catch((err) => console.error("Error fetching hotels:", err));
  }, []);

  const handleSelect = (hotel) => {
    if (selectedHotel && selectedHotel.name === hotel.name) {
      setSelectedHotel(null);
      setRemainingBudget(tripInfo.remainingBudget);
    } else {
      setSelectedHotel(hotel);
      setRemainingBudget(tripInfo.remainingBudget - Number(hotel.price));
    }
  };

  const handleConfirmHotel = () => {
    if (!selectedHotel) {
      alert("Please select a hotel first!");
      return;
    }

    const updatedTrip = {
      ...tripInfo,
      hotel: selectedHotel,
      remainingBudget,
    };
    localStorage.setItem("tripInfo", JSON.stringify(updatedTrip));

    alert(`You booked ${selectedHotel.name} for $${selectedHotel.price}.\nRemaining Budget: $${remainingBudget}`);
  };

  const goToReview = () => {
    if (!selectedHotel) {
      alert("Please confirm a hotel before reviewing your trip!");
      return;
    }
    const updatedTrip = {
      ...tripInfo,
      hotel: selectedHotel,
      remainingBudget,
    };
    localStorage.setItem("tripInfo", JSON.stringify(updatedTrip));
    navigate("/review");
  };

  return (
    <div className="book-hotel-page">
      <h1>Book Hotel for {tripInfo.username}</h1>
      <p>Remaining Budget: ${remainingBudget}</p>

      <div className="hotel-list">
        {hotelOptions.map((hotel, i) => (
          <div
            key={i}
            className={`hotel-card ${selectedHotel === hotel ? "selected" : ""}`}
            onClick={() => handleSelect(hotel)}
          >
            <h3>{hotel.name}</h3>
            <p>Location: {hotel.location}</p>
            <p>Price: ${hotel.price}</p>
          </div>
        ))}
      </div>

      <button className="create" onClick={handleConfirmHotel}>
        Confirm Hotel Booking
      </button>

      <button
        className="create review-btn"
        onClick={goToReview}
      >
        Go to Review
      </button>
    </div>
  );
}
