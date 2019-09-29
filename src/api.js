const mysql = require('mysql');
const app = require('express')();
const cors = require('cors');
const PORT = process.env.PORT || 8081;
let dbConn = "";
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Connection bdd local
app.use(function (req, res, next) {
    dbConn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'azerty',
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
    dbConn.query("SELECT Perso.IdPerso, User.mdp, User.pseudo FROM User inner join Perso on IdUser=id_user WHERE User.email = ?", email, function (error, results, fields) {
        if (error) return next(error);
        return res.send({ error: false, data: results, message: 'user pwd' });
    });
});

app.get('/getItems', (req, res, next) => {
    dbConn.query("SELECT * from Equipement", function (error, results, fields) {
        if (error) return next(error);
        return res.send({ error: false, data: results, message: 'Equipement' });
    });
});

app.get('/getExpendables', (req, res, next) => {
    dbConn.query("SELECT * FROM BuyableExpendable", function (error, results, fields) {
        if (error) return next(error);
        return res.send({ error: false, data: results, message: 'inventory stuff' });
    });
});

app.get('/perso/lvl/gold/:id', (req, res, next) => {
    const id = req.params.id
    dbConn.query("SELECT level, golds, worldMax, xp FROM Perso WHERE idPerso = ?", id, function (error, results, fields) {
        if (error) return next(error);
        return res.send({ error: false, data: results, message: 'Lvl and gold' });
    });
});


app.get('/lienequip/true/:id', (req, res, next) => {
    const id = req.params.id
    dbConn.query("SELECT * FROM LienEquip INNER JOIN Equipement ON Equipement.IdEquip = id_equip WHERE location = 1 AND id_perso = ? ", id, function (error, results, fields) {
        if (error) return next(error);
        return res.send({ error: false, data: results, message: 'stuff equiped' });
    });
});

app.get('/lienequip/false/:id', (req, res, next) => {
    const id = req.params.id
    dbConn.query("SELECT * FROM LienEquip INNER JOIN Equipement ON Equipement.IdEquip = id_equip WHERE location = 0 AND id_perso = ?", id, function (error, results, fields) {
        if (error) return next(error);
        return res.send({ error: false, data: results, message: 'inventory stuff' });
    });
});

app.post('/userpost/:email/:username/:mdp', (req, res, next) => {
    const email = req.params.email
    const username = req.params.username
    const mdp = req.params.mdp
    dbConn.query("insert into User (email, pseudo, mdp) values (?, ?, ?)", [email, username, mdp], function (error, results, fields) {
        if (error) return next(error);
        res.send({ error: false, data: results, message: 'insert into user' });
    });

});
app.post('/inventoryEquip', (req, res, next) => {
    //IdPerso à stocker lors de la connection
    const IdPerso = req.body.shift();
    let listEquip = req.body;
    //expected : req.body = [IdPerso,...{id_equip,rarity}]
    dbConn.query('DELETE * FROM LienEquip WHERE id_perso=?;', IdPerso);
    let listId = getFreeIds('IdLienEquip', 'LienEquip', listEquip.length)
    for (let equip of listEquip) {
        dbConn.query('INSERT INTO LienEquip (IdLienEquip,id_equip,id_perso,rarity) VALUES (?, ?, ?, ?);', listId.shift(), equip.id_equip, IdPerso, equip.rarity).catch((err) => next(err))
    }
    res.status = 200;
    res.send()
})

app.post('/inventoryExpend', (req, res, next) => {
    const expectedValues = ['healValue', 'attValue', 'defValue', 'critValue', 'dodgeValue', 'rarity']
    //IdPerso à stocker lors de la connection
    const IdPerso = req.body.shift();
    let listEquip = req.body;
    //expected : req.body = [IdPerso,...{healValue,attValue,defValue,critValue,dodgeValue,rarity}]
    dbConn.query('DELETE * FROM Expendable WHERE id_perso=?;', IdPerso);
    let listId = getFreeIds('IdExpendable', 'Expendable', listEquip.length)
    for (let equip of listEquip) {
        dbConn.query('INSERT INTO Expendable (IdExpendable,id_perso,?,?,?,?,?) VALUES (?, ?, ?, ?,?,?,?);', [...expectedValues, listId.shift(), IdPerso, ...expectedValues.map((val) => listEquip[val])], function (error, results, fields, listRes2) {
            if (error) return next(error);
        })
    }
    res.status = 200;
    res.send()
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
            dbConn.query('INSERT INTO LienEquip (IdLienEquip,id_equip,id_perso,rarity,cost,location) VALUES (?, ?, ?, ?,?,"perso");', [listId.shift(), equip.id_equip, IdPerso, equip.rarity, equip.cost], function (error, results, fields, listRes2) {
                if (error) return next(error);
            })
        }
        res.status = 200;
        res.send()
    })
})

app.post('/perso', (req, res, next) => {
    let expectedValues = ['baseLife', 'baseAtt', 'baseDef', 'baseCrit', 'baseDodg', 'level', 'golds', 'status'];
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
        let listId = results;
        let id = 1,
            nb = 0,
            listRes = [];

        while (nb < n) {
            if (id === listId.shift()[idName]) id++;
            else {
                listRes.push(id);
                nb++;
                id++;
            }
        }
        cb(null, listRes)
    })
}