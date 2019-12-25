const express = require("express");
const app = express();
const path = require("path");
const sqlite3 = require("sqlite3").verbose(); //verbose() method allow to have more information in case of a problem


//server configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false })); // <-- middleware configuration

//connection to the sqlite database
const db_name = path.join(__dirname, "data", "appdata.db");
const db = new sqlite3.Database(db_name, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("successful connection to the database 'appdata.db' ");
});

app.listen(3000, () => { 
  console.log("Server started (http://localhost:3000/) !");
});

/* app.get("/", (req, res) => { 
  res.send ("Hello world...");
}); */

//add
app.get('/add', (req, res) =>{
    res.render('add')
});

//POST /add
app.post("/add", (req, res) => {
    const sql = "INSERT INTO Laporan(data_string, data_integer,data_float, data_date, data_boolean) VALUES (?, ?, ?, ?, ?)";
    const data = [
        // req.body.* to access the data posted by the input form
        req.body.string,
        req.body.integer,
        req.body.float,
        req.body.date,
        req.body.boolean,

    ];
    db.run(sql, data, err => {
        //if(err) ...
        if (err) {
            console.error(err.message);
        }
        res.redirect("/")
    });
});

//GET /edit/5
app.get("/edit/:id", (req, res) => {
    //eq.params.* to retrieve the named parameters from the URL (the route)
    const id = req.params.id;
    const sql = "SELECT * FROM laporan WHERE id = ?";
    db.get(sql, id, (err, row) => {
        //if (err) ...
        res.render("edit", { model: row });
    });
});

//POST /edit/5

app.post("/edit/:id", (req, res) =>{
    //req.params.* to retrieve the named parameters from the URL (the route)
    const id = req.params.id;
    const laporan = [
        //req.body to access the data posted by the input form
        req.body.string,
        req.body.integer,
        req.body.float,
        req.body.date,
        req.body.boolean,
        id];
    const sql = "UPDATE Laporan SET data_string=?, data_integer=?, data_float=?, data_date=?, data_boolean=? WHERE (id = ?) ";
    db.run(sql, laporan, err =>{
        if(err){
            console.error(err.message);            
        }
        res.redirect("/");
    });
})

//GET /delete/5

app.get('/delete/:id', (req, res) => {
    let id = req.params.id;
    const sqlDel = `DELETE FROM laporan WHERE id = ?`;
    db.run(sqlDel, id, (err) => {
        if (err) throw err;
        console.log('Delete success')
    })
    res.redirect('/');
});

//

app.get('/', (req, res) => {
    let result = [];
    let filterData = false;

    if (req.query.check_id && req.query.id) {
        result.push(`id = ${req.query.id}`);
        filterData = true;
    }
    if (req.query.check_string && req.query.string) {
        result.push(`data_string = '${req.query.string}'`);
        filterData = true;
    }
    if (req.query.check_integer && req.query.integer) {
        result.push(`data_integer = ${req.query.integer}`);
        filterData = true;
    }
    if (req.query.check_float && req.query.float) {
        result.push(`data_float = ${req.query.float}`);
        filterData = true;
    }
    if (req.query.check_date && req.query.startDate && req.query.endDate) {
        result.push(`data_date BETWEEN '${req.query.startDate}' AND '${req.query.endDate}'`);
        filterData = true;
        console.log(req.query)
    }
    if (req.query.check_boolean && req.query.boolean) {
        result.push(`data_boolean = '${req.query.boolean}'`);
        filterData = true;
        console.log(req.query);
    }

    // count
    
    let sql = `SELECT COUNT(*) AS total FROM laporan`;
    if (filterData) {
        sql += ` WHERE ${result.join(' AND ')}`
    }
    console.log('sql :'+ sql);

    db.all(sql, (err, count) => {
        console.log('page ' + req.query.page);
        
        const page = req.query.page || 1;
        // console.log('Page ' + page);
        const limit = 3;
        const offset = (page - 1) * limit;
        // console.log('Offset ' + offset);
        console.log(req.url);
        
        const url = req.url == '/' ? '/?page=1' : req.url
        // console.log('Url ' + url);
        const total = count[0].total;
        // console.log('Total ' + total);
        const pages = Math.ceil(total / limit);
        // console.log('Pages ' + pages);
        let sql = `SELECT * FROM laporan`;
        if (filterData) {
            sql += ` WHERE ${result.join(' AND ')}`
        }
        sql += ` LIMIT ${limit} OFFSET ${offset}`;

        db.all(sql, (err, row) => {
            res.render('index', {
                model: row,
                page,
                pages,
                query: req.query,
                url
            });
        });
    });
});







const sql_create = `CREATE TABLE IF NOT EXISTS laporan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    data_string VARCHAR(100) NOT NULL,
    data_integer INTEGER NOT NULL,
    data_float REAL NOT NULL,
    data_date text,
    data_boolean BOOLEAN NOT NULL
  );`;
// // TODO: USE db.run()
db.run(sql_create, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successful creation of the 'Laporan' table");
});