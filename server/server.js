const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://gadgadmara_0301_user:STKwXMYFt8tnzcqv@ac-lokywuu-shard-00-00.2avdfeh.mongodb.net:27017,ac-lokywuu-shard-00-01.2avdfeh.mongodb.net:27017,ac-lokywuu-shard-00-02.2avdfeh.mongodb.net:27017/profile?ssl=true&replicaSet=atlas-gi7g06-shard-0&authSource=admin&appName=Cluster0")

.then(()=>console.log("MongoDB Successfully Connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const User = mongoose.model("profile", userSchema, "profile")

app.post("/profile", async(req,res)=>{
    try{
        const user = await User.create(req.body);
        res.json({message: "User registered successfully", user});
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

app.get("/Allprofile", async (req, res) => {
    try {
        const users = await User.find({});
        res.json({status: "ok", data: users});
    } catch(err){
        res.status(500).json({error: err.message});
    }
})

app.post("/deleteProfile", async (req, res) => {
    try{
        const { userid } = req.body;
        const data = await User.deleteOne(
            {_id:userid}, function(err, res){
                console.log(err);
            });
            res.json({status: "Ok", data: "Data Deleted"})
    } catch (error){
        console.log(error);
    }
})


app.listen(5000, () => console.log("Server running on port 5000"));