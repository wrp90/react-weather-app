import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    recentCitySearch: [],
    searchedCity: {},
    singleDay: [],
    isLoggedIn: false,
};

export const searchSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        addCity: (state, action) => {
            state.recentCitySearch = [...state.recentCitySearch, action.payload];
        },
        addSearchedCity: (state, action) => {
            state.searchedCity = action.payload;
        },
        addSingleDay: (state, action) => {
            state.singleDay = [...state.singleDay, action.payload];
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        }
    },
});

export const { addCity, addSearchedCity, addSingleDay, setIsLoggedIn} = searchSlice.actions;

export const selectCities = (state) => state.cities.recentCitySearch;

export const searchedCity = (state) => state.cities.searchedCity;

export const selectSingleDay = (state) => state.cities.singleDay;

export const loggedIn = (state) => state.cities.isLoggedIn;

export default searchSlice.reducer;