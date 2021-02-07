const INITAL_STATE = {
  countryList: [],
  selectedCountry: "",
};
const reducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "SET_COUNTRY_LIST":
      return { ...state, countryList: action.payload };
    case "SET_SELECTED_COUNTRY":
      return { ...state, selectedCountry: action.payload };
    default:
      return state;
  }
};
export default reducer;
