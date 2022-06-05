import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CountriesList(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row">
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div
              key={country.alpha3Code}
              style={{ width: "400px" }}
              className="list-group-item list-group-item-action"
            >
              <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="country flag"
                />
                <h2>{country.name.common}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
