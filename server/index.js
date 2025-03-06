const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employeeModel = require('./models/employee')

const app = express();
app.use(express.json());
app.use(cors());

// mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/register',(req,res) => {
    employeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err))
})

app.post('/login',(req,res) => {
    const {email,password} = req.body
    employeeModel.findOne({email,password})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("success")
            }
            else{
                res.json("incorrect password")
            }
        }
        else{
            res.json("user not found")
        }
    })
})

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
