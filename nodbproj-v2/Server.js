const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');

const exp = express();
exp.use(cors());
exp.use(bodyParser.json());


const port = process.env.PORT || 3001;
const key = process.env.API_KEY;
exp.get('/api/getData', (req, res)=>{
axios.get(`https://www.fantasyfootballnerd.com/service/players/json/${key}`).then(resp =>{
      res.send(resp.data);
    })
})


    


exp.listen(port, ()=>{
    console.log(`I guess you can code after all! Port ${port} has been unlocked for you.`)
});