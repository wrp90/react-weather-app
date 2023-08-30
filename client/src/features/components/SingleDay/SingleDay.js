import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './SingleDay.css'

const SingleDay = () => {
    const { dt } = useParams();
    
    const selectedDay = useSelector((state) =>
        state.cities.singleDay.find((day) => day.dt === Number(dt))
    );

    return (
        <div className="single-day-container">
            <div className="single-day-card">
                <img
                    className="icon"
                    src={selectedDay.src}
                    alt="weather icon for forecast"
                />
                <h2 className="date font">Date: {selectedDay.date}</h2>
                <h3 className="weather-forecast font">Forecast: {selectedDay.forcast}</h3>
                <h3 className="temp font">Temperature: {selectedDay.temp}°F</h3>
                <h3 className="feels-like font">Feels like: {selectedDay.feels_like}°F</h3>
                <h3 className="humidity font">Humidity: {selectedDay.humidity}%</h3>
            </div>
        </div>
    )
};

export default SingleDay;



