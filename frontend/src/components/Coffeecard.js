import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Coffeecard extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Img variant="top" src={this.props.img} />
                        <Card.Text>
                        {this.props.description} 
                        </Card.Text>
                        <Card.Text>
                        {this.props.ingredients} 
                        </Card.Text>
                        <Button variant="primary" onClick={(e)=>this.props.addingToFav(e)}>Add to favourite</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Coffeecard;
