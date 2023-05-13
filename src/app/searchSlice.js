import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchedCity: {},
    recentCitySearch: [],
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
        }
    },
});

export const { addCity, addSearchedCity} = searchSlice.actions;

export const selectCities = (state) => state.cities.recentCitySearch;

export default searchSlice.reducer;