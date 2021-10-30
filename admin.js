var expr=require("express");
var router=expr.Router();
var cors=require('cors');
router.use(cors());
router.use(expr.urlencoded({extended:true}))
router.use(expr.json())

router.use(expr.static('moneymanager-router/build'));

const path = require('path');

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'moneymanager-router', 'build', 'index.html'));
    });

const PORT = process.env.PORT || 7081;

var {MongoClient,ObjectId} =require("mongodb")
var url ="mongodb+srv://prasath_rvg:zbM5qJZEqtwZMRJn@cluster0.qjrvt.mongodb.net/delta?retryWrites=true&w=majority";
const client = new MongoClient(url);

router.get("/getdashboard",function(req,res){

    client.connect(function(err,conn){

        var db=conn.db("delta");

        db.collection("transaction").find().toArray(function(err,data){

            res.send(data);

        })

    })

})

router.get("/test",function(req,res){

    res.status(200).send("hi")
})

module.exports=router