const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

var mysqlconnec = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "prac",
  multipleStatements: true,
});

mysqlconnec.connect((err) => {
  if (!err) {
    console.log("connected successfully");
  } else {
    console.log("errorr" + JSON.stringify(err, undefined, 2));
  }
});

exports.addItem = (req, res) => {

  console.log(`${req.body.itemname} and ${req.body.itemprice}`);
  var sql = "INSERT INTO items(named,price) VALUES(?,?)";
  mysqlconnec.query(sql, [emp.itemname, emp.itemprice], () => {
    if (!err) {
      return res.status(200).json({
        message: "Item successfully added"
      });
    } else {
      console.log(err);
      return res.status(400).json({
        error: err
      })
    }
  });
}

exports.getItems = (req, res) => {
  let emp = req.body;
  var sql = "SELECT * FROM items";
  mysqlconnec.query(sql, [emp.itemname, emp.itemprice], (err, rows) => {
    if (!err) {
      return res.json(rows);
    } else {
      console.log(err);
      res.status(400).json({
        error: err
      });
    }
  });
};

exports.signup = (req, res) => {
  let emp = req.body;
  var sql = "INSERT INTO users(name,email,contact,password) VALUES(?,?,?,?);";
  mysqlconnec.query(
    sql,
    [emp.fullname, emp.email, emp.contact, emp.password],
    (err, row, fields) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: err
        });
      } else {
        res.status(200).json({
          message: "Signup Successful, Please login"
        });
      }
    }
  );
};

exports.signin = (req, res) => {
  let emp = req.body;
  console.log("in sigin");
  var sql = "SELECT * FROM users WHERE email=? AND password=?";
  mysqlconnec.query(sql,
    [emp.email, emp.password],
    (err, row) => {
      console.log("in call back")
      if (err || row.length == 0) {
        return res.status(400).json({
          message: "Incorrect email or password",
        });
      }
      const token = jwt.sign(emp.email, "mysecretkey");

      res.cookie("token", token, {
        expire: new Date() + 9999
      });

      return res.json({
        token,
        user: row
      });
    }
  );
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  return res.json({
    message: "Signout success!"
  });
};

exports.requireSignin = expressJwt({
  secret: "mysecretkey",
  property: "auth"
});