// import { useSelector } from "react-redux";
// import { selectCities } from "../../../app/searchSlice";

const CityCard = ({ storedCity }) => {
    // const cities = useSelector(selectCities);
    return (
        <div className="city-card">
            <h2 className="city-name">{storedCity.city.name}</h2>
        </div>
    );
};

export default CityCard;