import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CountryDetails() {
  const { id } = useParams();
  const [foundCountry, setFoundCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => {
        setFoundCountry(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="col-7">
      {foundCountry && (
        <div className="country-card">         
          <table className="table table-striped">
            <thead>
            <td><h1> {foundCountry.name.common} </h1></td>
            <td><img
            src={` https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt="flag"/>
            </td>
            </thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                  {foundCountry.borders.map((country) => {
                    return <li>{country}</li>;
                  })}</ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
