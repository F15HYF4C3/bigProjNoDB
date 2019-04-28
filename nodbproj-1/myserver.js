const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const apiApp = express();
apiApp.use(cors());
apiApp.use(bodyParser.json());


const port = process.env.PORT || 8080;
apiApp.listen(port, ()=>{
    console.log(`I guess you can code after all! Port ${port} has been unlocked for you.`)
});