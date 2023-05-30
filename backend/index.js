const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const User = require("./db/User");
const Jwt = require("jsonwebtoken");
const jwtKey = "apply4job";


app.use(express.json());

app.post("/login", async (req, resp) => {
  console.log("istek geldi");
  console.log("change", req.body);
  if (req.body.email && req.body.password) {
    const user = await User.findOne(req.body).select("-password");
        if(user){
            Jwt.sign({user}, jwtKey, {expiresIn: "2h"}, (err,token) =>{
                if(err){
                    resp.send({error:err})
                }
                else resp.send({user,auth:token})
            })
        }
        else resp.send({result:"Email or password failed"});
    
  }
  else resp.send({result:"Email or password shouldn't be blank"});
});

app.listen(5000);
