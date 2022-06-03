import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CountriesList(props) {
  const [countries, setCountries] = useState([]);
  console.log("first", props);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, [countries]);

  return (
    <div>
      <h1>Countries</h1>
      {countries.map((country) => {
        //console.log(country._id)
        return (
          <div class="container">
            <div class="row">
              <ul class="list-group" key={country._id} className="country">
                <Link
                  class="btn btn-outline-primary"
                  to={`/countries/${country.alpha3Code}`}
                >
                  {country.name.official}
                </Link>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
