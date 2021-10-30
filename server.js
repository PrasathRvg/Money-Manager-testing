var expr=require("express");
var app=expr();
var cors=require('cors');
app.use(cors());
app.use(expr.urlencoded({extended:true}))
app.use(expr.json())

var temp=require('./admin')
app.use('/admin',temp)

//
app.get('/testing', (req, res) => {
  res.json({
    message: 'Its working fine'
  })
})


app.use(expr.static(path.join('__dirname,build')));

const path = require('path');

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'build', 'index.html'));
    });

const PORT = process.env.PORT || 7081;
    
//

var {MongoClient,ObjectId} =require("mongodb")
var url ="mongodb+srv://prasath_rvg:zbM5qJZEqtwZMRJn@cluster0.qjrvt.mongodb.net/delta?retryWrites=true&w=majority";
const client = new MongoClient(url);

var session = require('express-session');
app.use(session({
                    secret: "Shh, its a secret!",
                    resave: false,
                    saveUninitialized: true
                }))

app.get("/getincome",function(req,res){

    client.connect(function(err,conn){

        var db=conn.db("delta");

        db.collection("transaction").find().sort({_id:-1}).limit(5).toArray(function(err,data){

            res.send(data);

        })

    })

})
function ath(req,res,next){
    console.log(req.session.uid);
    if(req.session.mail){
        client.connect((err,conn) => {
            var db = conn.db('delta');
            db.collection('Register').find({mail : req.session.mail}).toArray((err,data) =>{
                if(data[0].password === req.session.password){
                    next()
                }
                else{
                    res.send({link : '/login'})
                }
            });
        });
    }else{
        res.send({link : '/login'})
    }
}

app.get("/getdashboard",function(req,res){

    client.connect(function(err,conn){

        var db=conn.db("delta");

        db.collection("transaction").find().toArray(function(err,data){

            res.send(data);

        })

    })

})

app.get("/getbudget",function(req,res){

    client.connect(function(err,conn){

        var db=conn.db("delta");

        db.collection("budget").find().toArray(function(err,data){

            res.send(data);

        })

    })

})

app.get("/getuser",function(req,res){

    client.connect(function(err,conn){

        var db=conn.db("delta");

        db.collection("Register").find().toArray(function(err,data){

            res.send(data);

        })

    })

})

app.get("/getaccount",function(req,res){

    client.connect(function(err,conn){

        var db=conn.db("delta");

        db.collection("account").find().sort({_id:-1}).toArray(function(err,data){

            res.send(data);

        })

    })

})

app.delete('/deletetransaction/:_id',(req,res)=>{
    client.connect((err,conn)=>{
        var dbo=conn.db('delta')
        dbo.collection('transaction').deleteOne({_id:ObjectId(req.params._id)},(err,data)=>{
            res.send(data)
        })
    })
})




app.post("/acctform",(req,res)=>{
    console.log("body",req.body)
    client.connect((err,conn)=>{
        var dbo=conn.db('delta')
        dbo.collection('account').insertOne(req.body,(err,data)=>{
            console.log(data)
            res.send(data)
        })
    })
})

app.post("/budget",(req,res)=>{
    console.log("body",req.body)
    client.connect((err,conn)=>{
        var dbo=conn.db('delta')
        dbo.collection('budget').insertOne(req.body,(err,data)=>{
            console.log(data)
            res.send(data)
        })
    })
})

app.post("/expense",(req,res)=>{
    console.log("body",req.body)
    const body={ category: req.body.category,
        amount: req.body.amount,
        accountType: req.body.accountType,
        date: req.body.date,
        type:"Expense",userid:req.body.userid  }
    client.connect((err,conn)=>{
        var dbo=conn.db('delta')
        dbo.collection('transaction').insertOne(body,(err,data)=>{
            console.log(data)
            res.send(data)
        })
    })
})

app.post("/income",(req,res)=>{
    console.log("body",req.body)
    const body={ category: req.body.category,
    amount: req.body.amount,
    accountType: req.body.accountType,
    date: req.body.date,
    type:"Income", 
userid:req.body.userid }
    client.connect((err,conn)=>{
        var dbo=conn.db('delta')
        dbo.collection('transaction').insertOne(body,(err,data)=>{
            console.log(data)
            res.send(data)
        })
    })
})

app.put('/updatetransaction',(req,res)=>{
    client.connect((err,conn)=>{
        var dbo=conn.db('delta')
        dbo.collection('transaction').updateOne({_id:ObjectId(req.body._id)},
        {$set:{category: req.body.category,
            amount: req.body.amount,
            accountType: req.body.accountType,
            date: req.body.date}},(err,data)=>{
            res.send(data)
        })
    })
})

app.post("/registeruser",function(req,res){
    console.log("req fields",req.body)
    if(req.body.password!==req.body.confirmpassword){
        res.send("password not match")
    }
    else if(req.body.password.length<=6){
        res.send({message :"Password should be more than 6"})
    }
    else{
        client.connect(function(err,conn){
            var db = conn.db("delta");
            db.collection("Register").find({mail:req.body.mail})
            .toArray(function(err,data){
                if(data.length===0){
                    db.collection('Register').insertOne(req.body,function(err,data){
                        if(err){
                            console.log(err)
                        }
                        else{
                        res.send(data)
                        }   
                    })                    
                }
                else{
                    res.send({message: "Already Registered User"});                    
                }
            })
        })
    }
})

//login
app.post("/loginuser",function(req,res){
    client.connect(function(err,conn){
        var db=conn.db("delta");
        db.collection("Register").find({mail:req.body.mail})
        .toArray(function(err,data){
            if(data.length===0){
                res.send({message:"User Doesn't Exist"})
            }
            else{
                if(data[0].password===req.body.password){
                    console.log(data[0]);
                        req.session.mail = req.body.mail;
                        req.session.password = req.body.password;
                        req.session.uid = data[0]._id;
                        res.status(200).send({ message:"login success",
                        _id:data[0]._id,
                        mail:data[0].mail,
                        password:data[0].password,});  
                }
                else{
                    res.send({message :"wrong Password"})
                }
            }
        })
    })
})

app.post('/logout',(req,res) =>{

    console.log(req.session.mail);

    console.log(req.session.password);

    console.log(req.session.uid);

    if(req.session.mail){

        req.session.destroy((err) =>{

            if(err){

                res.status(500).send('Could not log out.' )

            }else{

                res.status(200).send({})

            }

        });

    }else{

        res.status(404).send({})

    }

})

app.delete("/remove/:_id",function(req,res){
    client.connect(function(err,con){
        var db =con.db("delta");
        db.collection("budget").deleteOne({_id:ObjectId(req.params._id)},function(err,data){
            res.send(data);
            
        })
        
    })
})
app.put("/update_budget",function(req,res){
    client.connect(function(err,con){
        console.log(req.body)
        var db =con.db("delta");
        db.collection("budget").updateOne(
            {_id:ObjectId(req.body._id)},
            {
                $set:{
                   
                    budgetname : req.body.budgetname,
                    category : req.body.category,
                    amount : req.body.amount,
                    budgetplan : req.body.budgetplan,
                    startdate : req.body.startdate,
                    enddate : req.body.enddate,
                    
                }
            },
        function(err,data){
            console.log(data)
            res.redirect('/')
        }
    )
        
    })
})


app.listen(PORT,()=>{console.log("the port is running on 7081")})