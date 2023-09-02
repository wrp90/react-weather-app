import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'; // Import React Bootstrap components
import './SearchBar.css';

const SearchBar = ({ onHandleSubmit }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onHandleSubmit(city);
        setCity('');
    };

    return (
        <div className="search font">
            <Form onSubmit={(event) => handleSubmit(event)}>
                <Form.Group controlId="searchCity">
                    <Form.Label className="font">Search City:</Form.Label>
                    <FormControl
                        type="text"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        placeholder="Enter city name"
                    />
                </Form.Group>
                <Button className="font" variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </div>
    );
};

export default SearchBar;