//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  
var express = require('express');
// Nous définissons ici les paramètres du serveur.
var hostname = '0.0.0.0';
var port = 3002;

// Nous créons un objet de type Express. 
var app = express();

//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes. 
var myRouter = express.Router();

var bodyParser = require("body-parser");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});
var cors = require("cors");
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// J'implémente les méthodes GET, PUT, UPDATE et DELETE

/* GESTION DE LA BDD */

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/database.db', (err) => {
  //Si y'a un soucis d'ouverture de la DB
  if (err) {
    console.error(err.message);
  }
  else {
    console.log("L'appliquation est conncté a la base de données");
  }
});

let table_user = "CREATE TABLE IF NOT EXISTS Users (id_user integer PRIMARY KEY AUTOINCREMENT, login varchar2 (50), password varchar2 (50))";
db.run(table_user);


app.get('/test', function (req, res) {
    res.status(200).json({ "message": "Get OK" })
    return;
});

app.post('/login', function (req, res) {
  console.log("User :" + req.body.login + "Pass : " + req.body.password)
    let request_login = "SELECT * FROM Users WHERE Users.login = ? AND Users.password = ?"
    let params_request_login = [req.body.login, req.body.password]
    db.get(request_login,params_request_login, (erreur,row) => {
        if(erreur) {
            res.status(400).json({"erreur" : erreur.message})
            return 
        }
        console.log(row)
        if(row) {
            console.log(row)
            res.status(200).json({"Message" : "ok"})
            return
        }else {
            res.status(403).json({"erreur" : "Mauvais mogin ou mot de passe"}) 
            return
        }
    }) 
    
});

app.post('/create_user', function (req, res) {
    
})





    // Nous demandons à l'application d'utiliser notre routeur
    app.use(myRouter);

    // Démarrer le serveur 
    app.listen(port, hostname, function () {
        console.log("L'appliquation fonctionne sur http://" + hostname + ":" + port);
    });