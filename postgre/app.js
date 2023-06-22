const { Pool } = require('pg');
const fs = require('fs');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'user_info_storage_db',
  password: 'password',
  port: 5432,
});

pool.connect((err, client, done) => {
  if (err) {
    console.error('Error acquiring client from pool', err);
  } else {
    client.query('SELECT * FROM users', (queryErr, result) => {
      done(); // Release the client connection back to the pool
      if (queryErr) {
        console.error('Error executing query', queryErr);
      } else {
        console.log('Query result:', result.rows);
      }
    });
  }
});