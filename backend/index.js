const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const User = require("./db/User");
const Jwt = require("jsonwebtoken");
const jwtKey = "apply4job";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))



app.use(express.json());

app.post("/login", async (req, resp) => {
  console.log("istek geldi");
  console.log("change", req.body);
  if (req.body.email && req.body.password) {
    const user = await User.findOne(req.body).select("-password");
        if(user){
            Jwt.sign({user}, jwtKey, {expiresIn: "2h"}, (err,token) =>{
                if(err){
                    resp.send({result:false})
                }
                else resp.send({result:true,user,auth:token,lifesycle:true})
            })
        }
        else resp.send({result:false});
    
  }
  else resp.send({result:false});
});


app.post("/signup", async(req, resp) => {
    if (req.body.email && req.body.password) {
        
    }
    else resp.send({result:false});
})

app.post("/check", verifyToken, async (req,resp)=>{
    await delay(5000)
    console.log('istek here')
    resp.send({result:true})
})

function verifyToken(req,resp,next){
    console.warn(req.headers["authorization"]);
    let token = req.headers['authorization'];
    if(token){
        token = token.split(' ')[1];
        Jwt.verify(token, jwtKey,(err, valid)=>{
            if(err){
                resp.send({result:false})
            }
            else{
                next();
            }
        })
    }
    else {
        resp.status(403).send({result: 'Please provide a token'})
    }
}

app.listen(5000);
