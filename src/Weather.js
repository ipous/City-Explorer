import React from 'react';
import Card  from 'react-bootstrap/Card';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

class Weather extends React.Component {
  render() {
    return(
      <Row md={3}>
        {this.props.weatherArr.map((dayObj, idx) => (
          <Col key={idx}>
            <Card className="Forecast">
            <Card.Text>Date: {dayObj.day}</Card.Text>
            <Card.Text>Forcast Description: {dayObj.description}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Weather; 