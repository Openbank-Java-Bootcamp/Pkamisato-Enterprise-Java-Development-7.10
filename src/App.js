import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import NavBar from "./components/Navbar";



function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/countries"
          element={<CountriesList/>}
        />
        <Route
          path="/countries/:id"
          element={<CountryDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
