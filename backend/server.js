const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const mysql = require('mysql')
 
const db = mysql.createConnection({
    host: "localhost",
    port: 3307,
    database: "felveteli",
    user: "root",
    password: ""
});



app.get('tagozatok', (req, res) => {
    const sqlParancsok = "SELECT * FROM tagozatok ORDER BY agazat";
    db.query(sqlParancsok, (err, result)=> {
        if(err){
            res.json(err);
        }
        res.json(result);  
    })
})

app.get('tagozatok', (req, res) => {
    const sqlParancsok = "SELECT d.nev ,t.agazat ,(d.hozott + d.kpmagy + d.kpmat) FROM felveteli.diakok d JOIN felveteli.jelentkezesek j ON d.oktazon = j.diak JOIN felveteli.tagozatok t ON j.tag = t.akod ORDER BY  DESC;";
    db.query(sqlParancsok, (err, result)=> {
        if(err){
            res.json(err);
        }
        res.json(result);  
    })
})

app.listen(3001, () => {
    console.log(`Fut 3001-es porton`)
  })
