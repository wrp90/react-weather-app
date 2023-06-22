import { useSelector } from "react-redux";
import { searchedCity } from "../../../app/searchSlice";
import ForcastCard from "../ForecastCard/ForecastCard";
import './Forecast.css';

const ForecastList = ({ searchError }) => {
    const selectedCity =  useSelector(searchedCity);

    const displayForcast = () => {
        if (searchError) {
            return <p>Invalid Search Term: {searchError}</p>
        };
        return Object.keys(selectedCity).length ? (
            <div className="forcast-list">
                {selectedCity.list.map((data, i) => {
                    if (i % 8 === 0) {
                        return (
                            <ForcastCard data={data} key={data.dt}/>
                        )
                    }
                    return null;
                })}
            </div>
        ) : (
            <div>No Results</div>
        );
    };

    return (
        <div className="forcast-container">
            <h1 className="city-name">{selectedCity.city?.name}</h1>
            <div className="forcast-list">
                {displayForcast()}
            </div>
        </div>
    );
};

export default ForecastList;