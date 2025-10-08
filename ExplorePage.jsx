import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { FaSearch } from "react-icons/fa";
import "./ExplorePage.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getFamousPlacesByCity, getCityCoordinates } from "./PlacesData";

// Fixes for default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadows.png",
});

// Component to handle map view and marker updates
const LocationMarker = ({ position, name }) => {
  const map = useMap();
  useEffect(() => {
    if (position && position.lat && position.lng) {
      map.setView(position, 10); // Zoom in on the city
    }
  }, [position, map]);

  if (!position || !position.lat || !position.lng) return null;

  return (
    <Marker position={position}>
      <Popup>{name}</Popup>
    </Marker>
  );
};

// PlaceCard component: Image, Bold Name, 3 Points
const PlaceCard = ({ place }) => {
  return (
    <div className="place-card">
      <img src={place.photoUrl} alt={place.name} className="card-image" />
      <div className="card-info">
        <div className="place-name">
          <strong>{place.name}</strong>
        </div>
        {place.points.map((point, index) => (
          <p key={index} className="info-point">
            &bull; {point}
          </p>
        ))}
      </div>
    </div>
  );
};

const ExplorePage = () => {
  const defaultCity = "Hyderabad";
  const [searchTerm, setSearchTerm] = useState(defaultCity);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [markerName, setMarkerName] = useState("");
  const [famousPlaces, setFamousPlaces] = useState([]);
  const [searchedCity, setSearchedCity] = useState("");

  const initialCenter = { lat: 20, lng: 78 };

  const runSearch = (query) => {
    const queryLower = query.toLowerCase();

    const coordinates = getCityCoordinates(queryLower);

    if (coordinates) {
      setMarkerPosition(coordinates);
      setMarkerName(query);
    } else {
      // Fallback for map location (using Nominatim for places not in data)
      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=1`
      )
        .then((res) => res.json())
        .then((nomData) => {
          if (nomData.length > 0) {
            const { lat, lon, display_name } = nomData[0];
            setMarkerPosition({ lat: parseFloat(lat), lng: parseFloat(lon) });
            setMarkerName(display_name);
          } else {
            setMarkerPosition(null);
            setMarkerName("Place not found");
          }
        })
        .catch(() => {
          setMarkerPosition(null);
          setMarkerName("Error finding place");
        });
    }

    const places = getFamousPlacesByCity(queryLower);
    setFamousPlaces(places);
    setSearchedCity(query);
  };

  useEffect(() => {
    runSearch(defaultCity);
  }, []);

  const handleSearch = () => {
    const query = searchTerm.trim();
    if (!query) return;
    runSearch(query);
  };

  return (
    <div className="explore-page-container">
      <div className="app-window-frame">
        <header className="explore-header">
          <h1 className="page-title">Search Your Destination 🌎</h1>
        </header>

        <div className="search-bar-row">
          <div className="search-bar-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search a city: Try 'Delhi', 'Mumbai', 'Paris', 'Rome', 'Dubai', or 'Tokyo' (14 supported cities)"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        <main className="main-content">
          <div className="map-section">
            <MapContainer
              center={markerPosition || initialCenter}
              zoom={markerPosition ? 10 : 4}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%" }}
              className="map-container"
            >
              {/* === DEFAULT OSM TILE LAYER: Matches the screenshot's light colors === */}
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationMarker position={markerPosition} name={markerName} />
            </MapContainer>
          </div>

          <section className="places-info-section">
            <h3 className="photos-heading">
              Famous Tourist Spots in {searchedCity || "Selected City"}
            </h3>
            <div className="places-card-list">
              {famousPlaces.length > 0 ? (
                famousPlaces.map((place) => (
                  <PlaceCard key={place.id} place={place} />
                ))
              ) : (
                <p className="no-results">
                  No structured list of 4 famous spots found for{" "}
                  {searchedCity || "this location"}.
                  <br />
                  Please search for one of the supported cities for guaranteed
                  results.
                </p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ExplorePage;
