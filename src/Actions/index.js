import axios from "axios";
import React from "react";

export const getCountryList = () => (dispatch) => {
  axios.get("https://restcountries.eu/rest/v2/region/europe").then((res) => {
    dispatch({
      type: "SET_COUNTRY_LIST",
      payload: res.data,
    });
  });
};
export const setSelectedCountry = (code) => (dispatch) => {
  dispatch({
    type: "SET_SELECTED_COUNTRY",
    payload: code,
  });
};
