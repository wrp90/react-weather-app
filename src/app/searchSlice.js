import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    recentCitySearch: [],
    searchedCity: {},
    singleDay: [],
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
    },
});

export const { addCity, addSearchedCity, addSingleDay} = searchSlice.actions;

export const selectCities = (state) => state.cities.recentCitySearch;

export const searchedCity = (state) => state.cities.searchedCity;

export const selectSingleDay = (state) => state.cities.singleDay;

export default searchSlice.reducer;