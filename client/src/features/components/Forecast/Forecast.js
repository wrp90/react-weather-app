import { useSelector } from "react-redux";
import { searchedCity } from "../../../app/searchSlice";
import ForcastCard from "../ForecastCard/ForecastCard";
import './Forecast.css';

const ForecastList = ({ searchError }) => {
    const selectedCity =  useSelector(searchedCity);

    const displayForcast = () => {
        if (searchError) {
          return <p>Invalid Search Term: {searchError}</p>;
        }
      
        if (selectedCity && Object.keys(selectedCity).length) {
          return (
            <div className="forcast-list">
              {selectedCity.list.map((data, i) => {
                if (i % 8 === 0) {
                  return <ForcastCard data={data} key={data.dt} />;
                }
                return null;
              })}
            </div>
          );
        } else {
          return <div className="font">No Results</div>;
        }
    };

    return (
        <div className="forcast-container">
            <h1 className="city-name font">{selectedCity.city?.name}</h1>
            <div className="forcast-list">
                {displayForcast()}
            </div>
        </div>
    );
};

export default ForecastList;