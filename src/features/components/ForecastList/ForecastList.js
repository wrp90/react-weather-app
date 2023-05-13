import { useSelector } from "react-redux";
import { selectCities } from "../../../app/searchSlice";
// import ForcastCard from "../ForcastCard/ForcastCard";
import CityCard from "../CityCard/CityCard";

const ForecastList = () => {
    const cities = useSelector(selectCities);

    const displayForcast = () => {
        return cities.length ? (
            <div className="forcast-list">
                {cities.map((city) => {
                    return <CityCard storedCity={city} key={city.city.id} />
                })}
            </div>
        ) : (
            <div>No Results</div>
        );
    };

    return (
        <div className="forcast-container">
            {displayForcast()}
        </div>
    );
};

export default ForecastList;