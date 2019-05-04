// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const SNIPPET={"NFLTeams":[
    {"code":"ARI","fullName":"Arizona Cardinals","shortName":"Arizona"},
    {"code":"ATL","fullName":"Atlanta Falcons","shortName":"Atlanta"},
    {"code":"BAL","fullName":"Baltimore Ravens","shortName":"Baltimore"},
    {"code":"BUF","fullName":"Buffalo Bills","shortName":"Buffalo"},{"code":"CAR","fullName":"Carolina Panthers","shortName":"Carolina"},
    {"code":"CHI","fullName":"Chicago Bears","shortName":"Chicago"},{"code":"CIN","fullName":"Cincinnati Bengals","shortName":"Cincinnati"},
    {"code":"CLE","fullName":"Cleveland Browns","shortName":"Cleveland"},
    {"code":"DAL","fullName":"Dallas Cowboys","shortName":"Dallas"},{"code":"DEN","fullName":"Denver Broncos","shortName":"Denver"},{"code":"DET","fullName":"Detroit Lions","shortName":"Detroit"},{"code":"GB","fullName":"Green Bay Packers","shortName":"Green Bay"},
    {"code":"HOU","fullName":"Houston Texans","shortName":"Houston"},{"code":"IND","fullName":"Indianapolis Colts","shortName":"Indianapolis"},{"code":"JAC","fullName":"Jacksonville Jaguars","shortName":"Jacksonville"},{"code":"KC","fullName":"Kansas City Chiefs","shortName":"Kansas City"},{"code":"MIA","fullName":"Miami Dolphins","shortName":"Miami"},{"code":"MIN","fullName":"Minnesota Vikings","shortName":"Minnesota"},{"code":"NYG","fullName":"N.Y. Giants","shortName":"N.Y. Giants"},{"code":"NYJ","fullName":"N.Y. Jets","shortName":"N.Y. Jets"},{"code":"NE","fullName":"New England Patriots","shortName":"New England"},{"code":"NO","fullName":"New Orleans Saints","shortName":"New Orleans"},{"code":"OAK","fullName":"Oakland Raiders","shortName":"Oakland"},{"code":"PHI","fullName":"Philadelphia Eagles","shortName":"Philadelphia"},{"code":"PIT","fullName":"Pittsburgh Steelers","shortName":"Pittsburgh"},{"code":"LAC","fullName":"Los Angeles Chargers","shortName":"L.A. Chargers"},{"code":"SF","fullName":"San Francisco 49ers","shortName":"San Francisco"},{"code":"SEA","fullName":"Seattle Seahawks","shortName":"Seattle"},{"code":"LAR","fullName":"Los Angeles Rams","shortName":"L.A. Rams"},{"code":"TB","fullName":"Tampa Bay Buccaneers","shortName":"Tampa Bay"},{"code":"TEN","fullName":"Tennessee Titans","shortName":"Tennessee"},{"code":"WAS","fullName":"Washington Redskins","shortName":"Washington"}]}

const looper = (SNIPPET) => {
    return SNIPPET.reduce((r,e)=>{
        e.SNIPPET.forEach((e)=>{
            r.push(e);
        })
        return r;
    }, [])
}
console.log(looper(SNIPPET));