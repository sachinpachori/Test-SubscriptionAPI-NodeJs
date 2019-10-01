'use strict';
const { subscription } = require('../models/subscriptionModel');
const request = require('request');
const exAPIUrl = 'https://ckzvgrbymezqegu.form.io/reacttestform/submission';
const express = require('express');
var router = express.Router();

module.exports = function () {
    router.post("/subscription", function (req, res, next) {
    var subModel = subscription;
    subModel.firstName = req.body.fname;
    subModel.lastName = req.body.lname;
    subModel.email = req.body.email;
    subModel.mobilePhone = req.body.mphone;
    var reqBody = JSON.stringify(subModel);
    console.log(reqBody);
    postData(subModel, req, res, next);
});

function postData(subModel, req, res, next) { 
    var reqBody = JSON.stringify({data : subModel});    
    request.post({
        "headers": { 
            "content-type": "application/json", 
            "x-auth": "react-test" 
        },
        "url": exAPIUrl,
        "body": reqBody
    }, (error, response, body) => {
        if(error) {
            next(error);
        }
        var resu = res.status(200).json(body);  
        console.log(resu);   
        //console.log(resu.state);     
})};
return router;
};