'use strict';

const coffeeSeed=require('../models/coffee.model');

const seedingController =(req,res) =>{
    const newObj = coffeeSeed();
    res.json(newObj)
}
module.exports=seedingController