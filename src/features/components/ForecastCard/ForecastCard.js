import './ForecastCard.css'

const ForcastCard = ({ data }) => {
    return (
        <div className="forcast-card">
            <h2>Date: {data.dt_txt.substring(0,10)}</h2>
            <h3>Temperature: {data.main.temp}</h3>
            <h3>Feels like: {data.main.feels_like}</h3>
            <h3>Humidity: {data.main.humidity}</h3>
        </div>
    );
};

export default ForcastCard;