const UserDB = require('./userDB.js');

async function test() {
  db = new UserDB();
  db.connect();

  // Adding a user
  const osuId = 12345;
  const webhooks = ['webhook1', 'webhook2'];
  const lastUpdated = new Date();
  await db.addUser(osuId, webhooks, lastUpdated);

  // Getting a user
  const user = await db.getUser(osuId);
  console.log(user);

  // All the users!
  const users = await db.getUsers();
  console.log(users);
}

test();

// const { Pool } = require('pg');
// const fs = require('fs');

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'user_info_storage_db',
//   password: 'password',
//   port: 5432,
// });

// async function insertUser(osuId, webhooks, lastUpdated) {
//   const client = await pool.connect();

//   try {
//     // Convert the JavaScript millisecond timestamp to a PostgreSQL TIMESTAMP value
//     const postgresTimestamp = new Date(lastUpdated).toISOString();

//     const query = 'INSERT INTO users (osu_id, webhooks, last_updated) VALUES ($1, $2, $3)';
//     const values = [osuId, webhooks, postgresTimestamp];

//     await client.query(query, values);
//     console.log('User inserted successfully.');
//   } catch (error) {
//     console.error('Error inserting user:', error);
//   } finally {
//     client.release();
//   }
// }

// // insertUser(22839197, [], Date.now())

// pool.connect((err, client, done) => {
//   if (err) {
//     console.error('Error acquiring client from pool', err);
//   } else {
//     client.query('SELECT * FROM users', (queryErr, result) => {
//       done(); // Release the client connection back to the pool
//       if (queryErr) {
//         console.error('Error executing query', queryErr);
//       } else {
//         console.log('Query result:', result.rows);
//       }
//     });
//   }
// });