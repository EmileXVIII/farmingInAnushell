const mysql = require('mysql')
const app = require('express')()
const cors = require('cors');
const PORT = process.env.PORT || 8080
let dbConn = ""

// Connection bdd local
// app.use(function (req, res, next) {
//     dbConn = mysql.createConnection({
//         host: 'localhost',
//         user: 'debian-sys-maint',
//         password: 'phrHtsSP5Hoq6EYl',
//         database: 'farmingInAnutshell'
//     });
//     dbConn.connect();
//     next();
// });

// Connection bdd Serveur FarmingNutshell
app.use(function (req, res, next) {
    dbConn = mysql.createConnection({
        host: 'localhost',
        user: 'padmin',
        password: 'D3b14nr0oT',
        database: 'farmingInAnutshell'
    });
    dbConn.connect();
    next();
});

app.use(cors())

app.get('/user/:email/pwd', (req, res) => {
    const email = req.params.email
    dbConn.query("SELECT User.mdp FROM User WHERE User.email = ?", email, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'user pwd' });
    });
});

app.post('/userpost/:email/:username/:mdp', (req, res) => {
    const email = req.params.email
    const username = req.params.username
    const mdp = req.params.mdp
    dbConn.query("insert into User (email, pseudo, mdp) values (?, ?, ?)", [email, username, mdp], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
});

app.listen(PORT, () => {
    console.log('Serveur sur port : ', PORT)
})