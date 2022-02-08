import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';


class Weather extends React.Component {
    render() {
        return (
            <Row md={3}>
               { this.props.weatherArr.map((dayObj, idx) => (
                <Col key={idx}>
                    <Card className="forecast" style={{width: '18rem'}}>

                        <Card.Body>Date: {dayObj.day}</Card.Body>
                        <Card.Body>Forecast Description: {dayObj.description}</Card.Body>
                    </Card>
                </Col>
))}
            </Row>
        )
    }
}

export default Weather;