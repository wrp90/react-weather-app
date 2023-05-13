import './ForecastCard.css'

const ForcastCard = ({ data }) => {
    return (
        <div className="forcast-card">
            <img 
                className="icon" 
                src={"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"} 
                alt="weather icon for forecast"
                />
            <h2 className="date">Date: {data.dt_txt.substring(0,10)}</h2>
            <h3 className="temp">Temperature: {data.main.temp}°F</h3>
            <h3 className="feels-like">Feels like: {data.main.feels_like}°F</h3>
            <h3 className="humidity">Humidity: {data.main.humidity}%</h3>
        </div>
    );
};

export default ForcastCard;