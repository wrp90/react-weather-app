import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchedCity: {},
    recentCitySearch: [],
    // singleDay: {},
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
        // singleDay: (state, action) => {
        //     state.singleDay = action.payload;
        // },
    },
});

export const { addCity, addSearchedCity} = searchSlice.actions;

export const selectCities = (state) => state.cities.recentCitySearch;

export const searchedCity = (state) => state.cities.searchedCity;

// export const addSingleDay = (state) => state.cities.singleDay;

export default searchSlice.reducer;