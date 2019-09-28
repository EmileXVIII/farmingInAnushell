const mysql = require('mysql');
const app = require('express')();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
let dbConn = "";
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Connection bdd local
app.use(function (req, res, next) {
    dbConn = mysql.createConnection({
        host: 'localhost',
        user: 'debian-sys-maint',
        password: 'U8XkMMSTUVx2VgXu',
        database: 'farmingInAnutshell'
    });
    dbConn.connect();
    next();
});

// Connection bdd Serveur FarmingNutshell
// app.use(function (req, res, next) {
//     dbConn = mysql.createConnection({
//         host: '10.33.15.53',
//         user: 'padmin',
//         password: 'D3b14nr0oT',
//         database: 'farmingInAnutshell'
//     });
//     dbConn.connect();
//     next();
// });

app.use(cors())

app.get('/user/:email/pwd', (req, res, next) => {
    const email = req.params.email
    dbConn.query("SELECT Perso.IdPerso, User.mdp FROM User inner join Perso on IdUser=id_user WHERE User.email = ?", email, function (error, results, fields) {
        if (error) return next(error);
        return res.send({ error: false, data: results, message: 'user pwd' });
    });
});

app.post('/userpost/:email/:username/:mdp', (req, res, next) => {
    const email = req.params.email
    const username = req.params.username
    const mdp = req.params.mdp
    dbConn.query("insert into User (email, pseudo, mdp) values (?, ?, ?)", [email, username, mdp], function (error, results, fields) {
        if (error) return next(error);
        res.send({ error: false, data: results, message: 'users list.' });
    });

});
app.post('/inventory', (req, res, next) => {
    //IdPerso à stocker lors de la connection
    const IdPerso = req.body.shift();
    let listEquip = req.body;
    //expected : req.body = [IdPerso,...{id_equip,rarity}]
    dbConn.query('DELETE FROM LienEquip WHERE id_perso=?', [IdPerso], function (error, results, fields) {
        if (error) return next(error);
        let listId;
        getFreeIds('IdLienEquip', 'LienEquip', listEquip.length, (err, result) => {
            err ? next(err) : listId = result;
            for (let equip of listEquip) {
                dbConn.query('INSERT INTO LienEquip (IdLienEquip,id_equip,id_perso,rarity,cost,location) VALUES (?, ?, ?, ?,?,0);', [listId.shift(), equip.id_equip, IdPerso, equip.rarity, equip.cost], function (error, results, fields, listRes2) {
                    if (error) return next(error);
                })
            }
            res.status = 200;
            res.send()
        })
    })
})

app.post('/inventoryExpend', (req, res, next) => {
    const expectedValues = ['name', 'healValue', 'attValue', 'defValue', 'critValue', 'dodgeValue', 'rarity']
    //IdPerso à stocker lors de la connection
    const IdPerso = req.body.shift();
    let listEquip = req.body;
    //expected : req.body = [IdPerso,...{healValue,attValue,defValue,critValue,dodgeValue,rarity}]
    dbConn.query('DELETE FROM Expendable WHERE id_perso=?', [IdPerso], function (error, results, fields) {
        if (error) return next(error);
        let listId;
        getFreeIds('IdLienEquip', 'LienEquip', listEquip.length, (err, result) => {
            err ? next(err) : listId = result;
            for (let equip of listEquip) {
                dbConn.query(`INSERT INTO Expendable (IdExpendable,id_perso,${expectedValues.join(',')}) VALUES (?,?,${expectedValues.map(() => '?').join(',')});`, [listId.shift(), IdPerso, ...expectedValues.map((val) => listEquip[0][val])], function (error, results, fields, listRes2) {
                    if (error) return next(error);
                })
            }
            res.status = 200;
            res.send()
        })
    })
})

app.post('/ItemsEquip', (req, res, next) => {
    //IdPerso à stocker lors de la connection
    const IdPerso = req.body.shift();
    let listEquip = req.body;
    //expected : req.body = [IdPerso,...{id_equip,rarity}]
    let listId;
    getFreeIds('IdLienEquip', 'LienEquip', listEquip.length, (err, result) => {
        err ? next(err) : listId = result;
        for (let equip of listEquip) {
            dbConn.query('INSERT INTO LienEquip (IdLienEquip,id_equip,id_perso,rarity,cost,location) VALUES (?, ?, ?, ?,?,1);', [listId.shift(), equip.id_equip, IdPerso, equip.rarity, equip.cost], function (error, results, fields, listRes2) {
                if (error) return next(error);
            })
        }
        res.status = 200;
        res.send()
    })
})
5000
app.post('/perso', (req, res, next) => {
    let expectedValues = ['level', 'golds', 'xp', 'worldMax'];
    //IdPerso à stocker lors de la connection
    const IdPerso = req.body.shift();
    let listStats = req.body;
    //expected : req.body = [IdPerso,...{baseLife,baseAtt,baseDef,baseCrit,baseDodg,level,golds,status}]
    let vals = expectedValues.join('=?,') + '=?'
    dbConn.query(`UPDATE Perso SET ${vals} WHERE IdPerso=?`, [...expectedValues.map((val) => listStats[0][val]), IdPerso], function (error, results, fields, listRes2) {
        if (error) return next(error);
        res.status = 200;
        res.send();
    })
})


app.use((err, req, res, next) => {
    console.log(err)
    res.send(err.message)
})

app.listen(PORT, () => {
    console.log('Serveur sur port : ', PORT)
})

function getFreeIds(idName, table, n, cb) {
    console.log(idName, table, n)
    dbConn.query(`SELECT ${idName} FROM ${table} ORDER BY ${idName} ASC`, function (error, results, fields, listRes2) {
        if (error) return cb(error);
        let listId = results,
            id = 1,
            nb = 0,
            listRes = [];

        while (nb < n) {
            if (!listId[0] || id !== listId.shift()[idName]) {
                listRes.push(id);
                nb++;
                id++;
            }
            else {
                id++;
            }
        }
        cb(null, listRes)
    })
}