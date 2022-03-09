import React from 'react';
import { Row } from 'react-bootstrap';
import WeatherDay from './weatherday.js';

class Weather extends React.Component {
    render() {
        return (
            <Row md={3}>
                {this.props.weatherArr.map((dayObj, idx) => (
                    <WeatherDay dayObj = {dayObj} idx={idx}/>

                ))}
            </Row>
        )
    }
}

export default Weather;