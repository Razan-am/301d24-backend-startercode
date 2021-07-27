import React, { Component } from 'react';
import Favlist from './Favlist';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

class Favourite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newData: [],
            newTitle: '',
            newIngredients: '',
            index: 0,
            show: false,
        }
    }
    componentDidMount() {
        const url = `${process.env.REACT_APP_BACKEND_URL}/fav-list`;
        axios.get(url).then(response => {
            this.setState({
                newData: response.data
            })
        }).catch(error => {
            console.log(error.message);
        })
    }

    updateFav = async (e) => {
        e.preventDefault();
        const reqBody = {
            title: e.target.newTitle.value,
            ingredients: e.target.newIngredients.value,
        }
        const url = `${process.env.REACT_APP_BACKEND_URL}/update/${this.state.index}`;
        const updateData = await axios.put(url, reqBody)
        this.setState({
            newData: updateData.data
        })
    }
    showModal = () => {
        this.setState({
            show: true,
            title: this.state.newTitle,
            ingredients: this.state.newIngredients,
        })
    }
    deleteFav = async (id) => {
        const deletedArray = this.state.newData.filter((i, idx) => {
            return idx !== id
        });
        this.setState({
            newData: deletedArray
        });
        const email = 'razanalamleh@gmail.com';
        const url = `${process.env.REACT_APP_BACKEND_URL}/delete/${id}`;
        await axios.delete(url, { params: email })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <>
                {this.state.newData.length > 0 &&
                    this.state.newData.map((item, indx) => {
                        return <Favlist
                            title={item.title}
                            ingredients={item.ingredients}
                            img={item.img}
                            description={item.description}
                            idx={indx}
                            updateFav={this.updateFav}
                            deleteFav={this.deleteFav}
                        />
                    })
                }

                <Modal show={this.stateshow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Form</Modal.Title>
                    </Modal.Header>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder={this.state.title} value={this.state.title} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Ingredients</Form.Label>
                            <Form.Control type="password" placeholder={this.state.ingredients} value={this.state.ingredients} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default Favourite;
