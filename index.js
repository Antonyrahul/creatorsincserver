const crypto = require('crypto')
const express = require('express');
const app = express();
const cors = require('cors')
const bodyparser = require('body-parser');
//const { getName } = require('country-list');

const mongodbclient = require('mongodb');
//dburl = "mongodb://localhost:27017/"

dburl="mongodb+srv://anto:anto@cluster0.tpfkd.mongodb.net/creatorsincdb?retryWrites=true&w=majority"

//const geoip = require('geoip-lite');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors())

creatorsincdb="creatorsincdb";
creatorsinccollection="creatorsinccollection"


app.post('/adddata',function(req,res){
    console.log(req.body)
   

    mongodbclient.connect(dburl, function (err, client) {
        if (err) throw err;
        var db = client.db(creatorsincdb);
        let finddata = { creatorsinckey: "creatorsinc" }

        let updatedata = {
            $push: { userData: req.body},
            $setOnInsert: finddata,

        }
        
      
            db.collection(creatorsinccollection).findOneAndUpdate(finddata,updatedata, { upsert: true }, function (err, data) {
                if (err) throw err;
                client.close();
                res.json({
                    message: "saved",
                    
            })
            // Store hash in your password DB.
        

       // client.close();
    });

})

})
app.post('/sitevisit',function(req,res){
    console.log(req.body)
   

    mongodbclient.connect(dburl, function (err, client) {
        if (err) throw err;
        var db = client.db(creatorsincdb);
        let finddata = { creatorsinckey: "creatorsinc" }

        let updatedata = {
            $inc: { "sitevisitcount":+1},
            $setOnInsert: finddata,

        }
 
            db.collection(creatorsinccollection).findOneAndUpdate(finddata,updatedata, { upsert: true }, function (err, data) {
                if (err) throw err;
                client.close();
                res.json({
                    message: "saved",
                    
            })

    });

})

})

app.post('/formvisit',function(req,res){
    console.log(req.body)
   

    mongodbclient.connect(dburl, function (err, client) {
        if (err) throw err;
        var db = client.db(creatorsincdb);
        let finddata = { creatorsinckey: "creatorsinc" }

        let updatedata = {
            $inc: { "formvisitcount":+1},
            $setOnInsert: finddata,

        }
 
            db.collection(creatorsinccollection).findOneAndUpdate(finddata,updatedata, { upsert: true }, function (err, data) {
                if (err) throw err;
                client.close();
                res.json({
                    message: "saved",
                    
            })

    });

})

})

app.post('/startvisit',function(req,res){
    console.log(req.body)
   

    mongodbclient.connect(dburl, function (err, client) {
        if (err) throw err;
        var db = client.db(creatorsincdb);
        let finddata = { creatorsinckey: "creatorsinc" }

        let updatedata = {
            $inc: { "startvisitcount":+1},
            $setOnInsert: finddata,

        }
 
            db.collection(creatorsinccollection).findOneAndUpdate(finddata,updatedata, { upsert: true }, function (err, data) {
                if (err) throw err;
                client.close();
                res.json({
                    message: "saved",
                    
            })

    });

})

})

app.listen(process.env.PORT, function () {

    console.log("listening on port 4123");
});