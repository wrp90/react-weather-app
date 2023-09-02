import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSingleDay } from '../../../app/searchSlice';
import Card from 'react-bootstrap/Card';
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
        <div className="forecast-card-wrapper">
            <Card className="forecast-card">
                <Card.Img
                    variant="top"
                    src={"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"}
                    alt="weather icon for forecast"
                />
                <Card.Body>
                    <Card.Title className="date font">Date: {data.dt_txt.substring(0, 10)}</Card.Title>
                    <Card.Text className="weather-forecast font">Forecast: {data.weather[0].description}</Card.Text>
                    <Card.Text className="temp font">Temperature: {data.main.temp}°F</Card.Text>
                    <Link className="view-link font" to={{
                        pathname: `/single/${data.dt}`
                    }}>View More</Link>
                </Card.Body>
            </Card>
        </div>
    );

    dispatch(addSingleDay(forecastInfo));

    return forcast;
};

export default ForcastCard;