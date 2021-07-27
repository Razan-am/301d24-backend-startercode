'use strict';
const axios=require('axios');
const coffeeModel=require('../models/coffee.model');


// Endpoint for testing
const home=(req,res)=>{
// provide your logic here
    res.send('everthing is working fine');
}
// Call the coffee api here and return the results
const retreiveItemsController=(req,res)=>{
    // provide your logic here
    let url=('https://coffeepedias.herokuapp.com/coffee-list/');
    axios.get(url).then(response =>{
        let list = response.data.map(item =>{
            return new coffeeSchema(item);
        })
        res.json(list);
    })
};
// Get favorite coffee from MongoDB
const getFavoriteCoffee=(req,res)=>{
    // provide your logic here
    coffeeModel.findOne({},(error,user)=>{
        if(error){
            res.send(error.message)
        }else{
            res.json(user)
        }
    })
}
// Create new fav coffee endpoint
const createItemController=(req,res)=>{
    // provide logic here
    const{
        title,
        description,
        ingredients,
        img,
    }=req.body;
    coffeeModel.findOne({},(error,user)=>{
        if (error) {
            res.send(error.message)
        }else{
            const newData= new user({
                title:title,
                description:description,
                ingredients:ingredients,
                img:img,
            })
            newData.save();
            res.json(user)
        }
    })
};

// update coffee from MongoDB
const updateItemController=(req,res)=>{
    // provide logic here
    const updateIdx= Number(req.params.id);
    const{
        title,
        ingredients
    }=req.body;
    coffeeModel.findOne({},(error,user)=>{
        user.splice(updateIdx,1,{
            title:title,
            ingredients:ingredients,
        });
        user.save();
        res,send('it is update')
    })
};

// delete coffee from MongoDB
const deleteItemController=(req,res)=>{
    // provide your logic here
    const deleteIdx= Number(req.params.id);
    const email = req.query.email;
    coffeeModel.findOne({email:email},(error,user)=>{
        const deleted = user.filter((i,idx)=>{
            return idx !== deleteIdx;
        });
        user = deleted;
        user.save();
        res.send('it is delete')
    })
};

module.exports={
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemsController
};