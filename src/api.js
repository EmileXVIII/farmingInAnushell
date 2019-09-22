const mysql = require('mysql')
const app = require('express')()
const PORT = process.env.PORT || 3001

// Connection bdd local
app.use(function (req, res, next) {
    res.locals.connection = mysql.createConnection({
        host: 'localhost',
        user: 'debian-sys-maint',
        password: 'phrHtsSP5Hoq6EYl',
        database: 'FarmingInAnutshell'
    });
    res.locals.connect();
    next();
});

// Connection bdd Serveur FarmingNutshell
// app.use(function (req, res, next) {
//     res.locals.connection = mysql.createConnection({
//         host: '10.33.15.53',
//         user: 'padmin',
//         password: 'D3b14nr0oT',
//         database: 'FarmingInAnutshell'
//     });
//     res.locals.connect();
//     next();
// });



app.get('/user/:email/pwd', (req, res) => {
    const email = req.params.email
    mysql.all("SELECT User.mdp FROM User WHERE User.email = ?", email)
        .then((response) => {
            res.json(response);
        })
        .catch(error => console.error('error', error))
});

app.post('/user/:email/:username/:mdp', (req, res) => {
    const email = req.params.email
    const username = req.params.username
    const mdp = req.params.mdp
    mysql.all("insert into User (email, username, mdo) values (?, ?, ?)", [email, username, mdp])
        .then((response) => {
            res.json(response);
        })
        .catch(error => console.error('error', error))
});

app.listen(PORT, () => {
    console.log('Serveur sur port : ', PORT)
})