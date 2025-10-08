import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import images
import Matterhorn from "../images/seven.png";
import SacredForest from "../images/one.png";
import Yosemite from "../images/three.png";
import Dudhsagar from "../images/five.png";
import Palolem from "../images/six.png";
import Golden from "../images/four.png";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate(); // useNavigate inside component
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [tripInfo, setTripInfo] = useState({});

  const places = [
    { name: "Matterhorn", image: Matterhorn },
    { name: "Sacred Monkey Forest Sanctuary", image: SacredForest },
    { name: "Yosemite National Park", image: Yosemite },
    { name: "Golden", image: Golden },
    { name: "Dudhsagar falls", image: Dudhsagar },
    { name: "Palolem beach", image: Palolem },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("tripInfo")) || {};
    setTripInfo(info);
  }, []);

  return (
    <div className={darkMode ? "dashboard dark-mode" : "dashboard"}>
      {/* Header */}
      <header className="dashboard-header">
        <h2>My Dashboard</h2>
        <div className="dropdown">
          <div
            className="dropdown-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            &#x2630;
          </div>
          {showDropdown && (
            <div className="dropdown-menu">
              <p
                onClick={() => {
                  setShowProfile(true);
                  setShowDropdown(false);
                }}
              >
                User Profile
              </p>
              <p
                onClick={() => {
                  navigate("/explore");
                  setShowDropdown(false);
                }}
              >
                Explore
              </p>
              <p
                onClick={() => {
                  setDarkMode(!darkMode);
                  setShowDropdown(false);
                }}
              >
                Toggle Dark Mode
              </p>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="dashboard-content">
        {showProfile ? (
          <div className="profile-card">
            <h2>User Profile</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Trips Made:</strong> {user.trips}</p>
            <button onClick={() => setShowProfile(false)}>Back to Dashboard</button>
          </div>
        ) : (
          <>
            <h1 className="welcome">Welcome, {user.username} 👋</h1>

            {/* Carousel */}
            <div style={{ margin: "30px 0", width: "100%" }}>
              <Slider {...settings}>
                {places.map((place, index) => (
                  <div key={index} className="place-slide">
                    <img
                      src={place.image}
                      alt={place.name}
                      style={{
                        width: "100%",
                        borderRadius: "12px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Current Trip Transport Details */}
            {tripInfo.transport && (
              <div className="current-trip-section">
                <h2>Current Trip Transport</h2>
                <div className="trip-card">
                  <p><strong>Name:</strong> {tripInfo.transport.name}</p>
                  <p><strong>Departure:</strong> {tripInfo.transport.departure}</p>
                  <p><strong>Arrival:</strong> {tripInfo.transport.arrival}</p>
                  <p><strong>Price:</strong> ${tripInfo.transport.price}</p>
                </div>
              </div>
            )}

            {/* Create Trip Button */}
            <button
              className="create"
              onClick={() => navigate("/create-trip")}
            >
              Create a Trip
            </button>
          </>
        )}
      </div>
    </div>
  );
}
