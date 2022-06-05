import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="list">
          <CountriesList />
        </div>
        <div className="card">
          <Routes>
            <Route path="/:id" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
