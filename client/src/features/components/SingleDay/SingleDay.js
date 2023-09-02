import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card'; // Import React Bootstrap Card
import './SingleDay.css';

const SingleDay = () => {
    const { dt } = useParams();

    const selectedDay = useSelector((state) =>
        state.cities.singleDay.find((day) => day.dt === Number(dt))
    );

    return (
        <div className="single-day-container">
            <Card className="single-day-card">
                <Card.Img
                    className="icon"
                    src={selectedDay.src}
                    alt="weather icon for forecast"
                />
                <Card.Body>
                    <Card.Title className="date font">Date: {selectedDay.date}</Card.Title>
                    <Card.Text className="weather-forecast font">Forecast: {selectedDay.forcast}</Card.Text>
                    <Card.Text className="temp font">Temperature: {selectedDay.temp}°F</Card.Text>
                    <Card.Text className="feels-like font">Feels like: {selectedDay.feels_like}°F</Card.Text>
                    <Card.Text className="humidity font">Humidity: {selectedDay.humidity}%</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleDay;




