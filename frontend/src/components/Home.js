import axios from 'axios';
import React, { Component } from 'react';
import Coffeecard from './Coffeecard';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            newTitle: '',
            newDescription: '',
            newIngredients: '',
            newImg: '',
            showData:false
        }
        console.log('hello');
    }
    compounentDidMount=async()=> {
        const url = `${process.env.REACT_APP_BACKEND_URL}/retreive`;
        await axios.get(url).then(response => {
            this.setState({
                data: response.data,
                showData:true
            })
            console.log('new data', response.data);
        }).catch(error => {
            console.log(error.message);
        })
    }
    
    addingToFav = (e) => {
        e.preventDefault();
        const reqBody = {
            title: this.state.newTitle,
            description: this.state.newDescription,
            ingredients: this.state.newIngredients,
            img: this.state.newImg,
        }
        const url = `${process.env.REACT_APP_BACKEND_URL}/create`
        axios.post(url, reqBody).then(response => {
            this.setState({
                data: response.data
            })
        }).catch(error => {
            console.log(error.message);
        })
    }
    
    render() {
        return (
            <>
                {this.state.showData &&
                    this.state.data.map(item => {
                        return <Coffeecard
                        title={item.title}
                        img={item.img}
                        description={item.description}
                        ingredients={item.ingredients}
                        addingToFav={this.addingToFav}
                        />

                    })
                }
            </>
        )
    }
}

export default Home;
