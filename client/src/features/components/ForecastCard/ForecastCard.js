import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSingleDay } from '../../../app/searchSlice';
import './ForecastCard.css';

const ForcastCard = ({ data }) => {
    const dispatch = useDispatch();

    const forecastInfo = {
        dt: data.dt,
        src: "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png",
        date: data.dt_txt.substring(0, 10),
        forcast: data.weather[0].description,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
    };

    const forcast = (
        <div className="forcast-card">
            <img
                className="icon"
                src={"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"}
                alt="weather icon for forecast"
            />
            <h2 className="date font">Date: {data.dt_txt.substring(0, 10)}</h2>
            <h3 className="weather-forecast font">Forecast: {data.weather[0].description}</h3>
            <h3 className="temp font">Temperature: {data.main.temp}°F</h3>
            {/* <h3 className="feels-like">Feels like: {data.main.feels_like}°F</h3>
            <h3 className="humidity">Humidity: {data.main.humidity}%</h3> */}
            <Link className="view-link font" to={{
                pathname: `/single/${data.dt}`
            }}>View More</Link>
        </div>
    );

    dispatch(addSingleDay(forecastInfo));

    return forcast;
};

export default ForcastCard;