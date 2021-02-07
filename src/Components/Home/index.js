import React, { useEffect } from "react";
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCountry,getCountryList } from "../../Actions";
const Home = () => {
  const state = useSelector((state) => state); // create Local State from Redux and call everything from Redux - P.S : it can be a little bit slowly
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryList());
  });
  return (
    <div>
      <ul>
        {state.countryList.map((
          country //foreach all countryList
        ) => (
          <li
            className={country.alpha3Code === state.selectedCountry ? "active" : ""} // check which line is active
            onClick={() => dispatch(setSelectedCountry(country.alpha3Code))} // change selectedCoutry after On Click
          >
            {country.name} - Capital : {country.capital}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
