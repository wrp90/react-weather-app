import "./CityCard.css"

const CityCard = ({ storedCity }) => {
    return (
        <div className="city-card">
            <h2 className="city">{storedCity.city.name}</h2>
        </div>
    );
};

export default CityCard;