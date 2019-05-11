const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');

const exp = express();
exp.use(cors());
exp.use(bodyParser.json());

let teams = [];
const favoriteTeams = [];

const port = process.env.PORT || 3001;
const key = process.env.API_KEY;
exp.get('/api/getData', (req, res)=>{
axios.get(`https://www.fantasyfootballnerd.com/service/nfl-teams/json/${key}`).then(resp =>{
    teams = resp.data.NFLTeams;
      res.send(resp.data);
    })
})

exp.post('/api/add', (req, res)=>{
    favoriteTeams.push(teams.filter((e, i)=>{
        return e.code === req.body.code
    })[0])
    res.send(favoriteTeams)
})

exp.delete('/api/delete/:id', (req, res)=>{
    let id;
    favoriteTeams.filter((e, i)=>{
      e.code === req.params.code && id === i;
      return id;
    })
    favoriteTeams.splice(id, 1)
    res.send(favoriteTeams)
})
    


exp.listen(port, ()=>{
    console.log(`Port ${port} has been opened.`)
});