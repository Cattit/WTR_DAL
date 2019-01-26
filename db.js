// const { Pool, Client } = require('pg')

// const pool = new Pool({
//   user: 'user1',
//   host: 'localhost',
//   database: 'mydb',
//   password: 'user1',
//   port: 5432,
// })

// // pool.query('SELECT NOW()', (err, res) => {
// //   console.log(err, res)
// //   pool.end()
// // })

// const client = new Client({
//   user: 'user1',
//   host: 'localhost',
//   database: 'mydb',
//   password: 'user1',
//   port: 5432,
// })
// client.connect()

// // client.query('SELECT NOW()', (err, res) => {
// //   console.log(err, res)
// //   client.end()
// // })

var pg = require('pg');
var pool;
var config = {
  user: 'user1',
  host: 'localhost',
  database: 'mydb',
  password: 'user1',
  port: 5432, 
};

module.exports = {
    getPool: function () {
      if (pool) return pool; // if it is already there, grab it here
      pool = new pg.Pool(config);
      return pool;
    }
}