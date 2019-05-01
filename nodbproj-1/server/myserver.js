const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
import axios from 'axios';

const apiApp = express();
apiApp.use(cors());
apiApp.use(bodyParser.json());

componentDidMount(){
    axios.get(`https://www.fantasyfootballnerd.com/service/players/json/dw68ms8krkjr`).then(resp =>{
      console.log(resp.data)
    })
  }
const port = process.env.PORT || 8080;
apiApp.listen(port, ()=>{
    console.log(`I guess you can code after all! Port ${port} has been unlocked for you.`)
});