import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Favlist extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description} 
                        </Card.Text>
                        <Card.Text>
                        {this.props.ingredients}
                        </Card.Text>
                        <Button variant="primary" onClick={(e)=>this.props.updateFav(e)}>Update</Button>
                        <Button variant="primary" onClick={(e)=>this.props.deleteFav()}>Delete</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Favlist;
