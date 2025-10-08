import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import BookTransport from "./pages/BookTransport";
import BookHotel from "./pages/BookHotel";
import Review from "./pages/Review";
import ExplorePage from "./pages/ExplorePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-trip" element={<CreateTrip />} />
         <Route path="/book-transport" element={<BookTransport />} />
         <Route path="/book-hotel" element={<BookHotel />} />
          <Route path="/review" element={<Review />} />
          <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </Router>
  );
}

export default App;