import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

class Weather extends React.Component {
    render() {
        return (
            <Row md={3}>
               {this.props.weatherArr.map((day, idx) => (
                <Col key={idx}>
                    <Card className="forecast">
                        <Card.Text>Date: {day.day}</Card.Text>
                        <Card.Text>Forecast: {day.description}</Card.Text>
                    </Card>
                </Col>
                ))}
            </Row>
        )
    }
}

export default Weather;
