import { useSelector } from "react-redux";
import { selectCities } from "../../../app/searchSlice";

const ForcastCard = () => {
    const cities = useSelector(selectCities);
    return (
        <div>
            <h1>{cities[0].city.name}</h1>
        </div>
    );
};

export default ForcastCard;