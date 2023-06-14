const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const User = require("./db/User");
const Jwt = require("jsonwebtoken");
const isMailValid = require("./utils");
const jwtKey = "apply4job";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const mailSender = require("./mailService/mail");
let randomNumber = 0;
app.use(express.json());

function getRandomInt(max) {
  return 10000+Math.floor(Math.random() * max);
}

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          resp.status(200).send({
            result: false,
            status: 200,
            body: "Key expired or wrong key",
          });
        } else
          resp.status(200).send({
            result: true,
            user,
            auth: token,
            status: 200,
            body: "Successfull login.Redirecting...",
          });
      });
    } else
      resp
        .status(200)
        .send({ result: false, status: 200, body: "User Not Found." });
  } else
    resp.status(200).send({
      result: false,
      status: 200,
      body: "E-mail or password shouldn't be blank",
    });
});


app.post("/checkuser", async (req, resp) => {
  if (
    req.body.email &&
    typeof req.body.email === "string" &&
    isMailValid(req.body.email) &&
    req.body.password &&
    req.body.ipAddress
  ) {
    let user = await User.findOne({ email: req.body.email }).select(
      "-password"
    );
    if (user) {
      resp.status(200).send({
        result: false,
        status: 400,
        body: "There is such an e-mail.",
      });
    }
    else{
      randomNumber = getRandomInt(100000);
      if(mailSender("NoReply@apply4job.com",req.body.email,"hello","Vertify code:"+randomNumber))
      {
        resp.status(200).send({
          result: true,
          status: 200,
          body: "Vertify code sended",
        });
      }
      else{
        resp.status(200).send({
          result: false,
          status: 400,
          body: "ERROR CODE 593",
        });
      }
      
      
    }
  } else {
    
    resp.status(200).send({
      result: false,
      status: 400,
      body: "E-mail or password couldn't be blank.",
    });
  }
})


app.post("/signup", async (req, resp) => {
  console.warn(req)
  console.warn('burdayık.')
  if (
    req.body.email &&
    typeof req.body.email === "string" &&
    isMailValid(req.body.email) &&
    req.body.password &&
    req.body.ipAddress
  ) {
    let user = await User.findOne({ email: req.body.email }).select(
      "-password"
    );
    if (user) {
      resp.status(200).send({
        result: false,
        status: 400,
        body: "There is such an e-mail.",
      });
    }
    else{
      if(randomNumber == req.body.vertifyNumber)
      {
        user = await User.insertMany(req.body);
        if (user) {
          Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
            if (err) {
              resp.status(200).send({
                result: false,
                status: 200,
                body: err,
              });
            } else {
              resp.status(200).send({
                user,
                result: true,
                status: 200,
                body: "Succesfull.Redirecting...",
                auth: token,
              });
            }
          });
        }
        else 
        {
          resp.status(400).send({
            result: false,
            status: 200,
            body: "Server doesn't response",
          });
        } 
      }
      else{
        console.warn("req",req.body.vertifyNumber )
        console.warn(randomNumber)
        resp.status(200).send({
          result: false,
          status: 400,
          body: "onaylanmadı.",
        });
      }
      
    }
  } else {
    
    resp.status(200).send({
      result: false,
      status: 400,
      body: "E-mail or password couldn't be blank.",
    });
  }
  
  
  
});

app.post("/newpassword", async(req,resp)=>{
  let user = await User.findOne({ email: req.body.email });
  console.log(req.body.email,user)
  if(user){
    mailSender("helpApply4job@gmail.com",user.email,"Unutulan password",user.password)
    resp.status(200).send({
      result: true,
      status: 200,
      body: "Password sended to your e-mail",
    });
  }
  else{
    resp.status(200).send({
      result: true,
      status: 200,
      body: "Password sended to your e-mail",
    });
  }
})

app.post("/checkconnection", verifyToken, async (req, resp) => {
  resp.status(200).send({
    result: true,
    status: 200,
    body: "Connection is alive",
  });
});

function verifyToken(req, resp, next) {
  let token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];
    Jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        resp.status(200).send({
          result: false,
          status: 200,
          body: err,
        });
      } else {
        next();
      }
    });
  } else {
    resp.status(200).send({
      result: false,
      status: 200,
      body: "Please provide a token.",
    });
  }
}

app.listen(5000);
