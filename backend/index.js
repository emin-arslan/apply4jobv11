const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors());
const User = require('./db/User')

app.use(express.json());


app.post('/login', async (req,resp)=>{
    console.log('istek geldi')
    const result = await User.findOne(req.body);
    result ? resp.send(result) : resp.send({ result:"Not found" })
    resp.send(result);

} )


app.listen(5000)