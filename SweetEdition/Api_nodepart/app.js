var express = require('express');
var app = express();
var dotenv = require('dotenv');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
dotenv.config();
var mongoUrl = process.env.MongoLiveUrl;
var cors =  require('cors');
const bodyParser = require('body-parser');
var port = process.env.PORT || 8126;
var db;

app.unlock(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


//first default route
app.get('/',(req,res)=>{
    res.send("Hi From Express")
})


//connecting with mongo server
MongoClient.connect(mongoUrl, (err,client)=>{
    if(err) console.Console("Error while connecting");
    db = client.db('SweetEdition');
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
})


//return all cake list

app.get('/cakelist',(req,res)=>{
    db.collection('cakeproduct').find({},{projection:{ _id:0 }}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// return the cake category with respect to id
app.get('/category/:id',(req,res)=>{
    var id = parseInt(req.params.id);
    db.collection('cakeproduct').find({"category_id":id}).toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})

// return the  only cake category with respect to id
app.get('/cakecategory/:id',(req,res)=>{
    var id = parseInt(req.params.id);
    db.collection('cakecategory').find({"id":id}).toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})


//return the all cakes on the basis of subcategory id

app.get('/subcategory/:id',(req,res)=>{
    var id = parseInt(req.params.id);
    db.collection('cakeproduct').find({"sub-category_id":id}).toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})

//retrun perticular cake details

app.get('/cakedetails/:id',(req,res)=>{
    var id = parseInt(req.params.id);
    db.collection('cakeproduct').find({"id":id}).toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})


app.post('/cake',(req,res) => {
    console.log(req.body);
    db.collection('cakeproduct').find({id:{$in:req.body}}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })

})

// return all the orders
app.get('/cakeorder',(req,res) => {
    var que =req.query.email;
    db.collection('cakeorder').find({email:que}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

 app.post('/placeorder',(req,res)=>{
     console.log(req.body);
     db.collection('cakeorder').insert(req.body,(err,result)=>{
         if(err) throw err;
         res.send("Order Placed")
     })
 })


 app.delete('/deleteorder',(req,res)=>{
     db.collection('cakeorder').remove({},(err,result)=>{
    if(err) throw err;
    res.send(result)
     })
 })
 

 //update the order status
 app.put('/updateStatus/:id', (req, res)=>{   
    var id = req.params.id;
    var status = req.body.status ? req.body.status : "Pending"; 
    db.collection('cakeorder').updateOne({id:id}, {
        $set:{
            "date":req.body.date,
            "bank_status":req.body.bank_status,
            "bank":req.body.bank,
            "status":status
        }
    })
    res.send('Data Updated');
})