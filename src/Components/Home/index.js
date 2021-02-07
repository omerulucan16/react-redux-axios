import React, { useEffect } from "react";
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCountry,getCountryList } from "../../Actions";
const Home = () => {
  const countryList = useSelector((state) => state.countryList);
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryList());
  });
  return (
    <div>
      <ul>
        {countryList.map((
          country //foreach all countryList
        ) => (
          <li
            className={country.alpha3Code === selectedCountry ? "active" : ""} // check which line is active
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
