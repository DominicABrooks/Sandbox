const { Pool } = require('pg');

class UserDB {
  constructor() {
    this.pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'user_info_storage_db',
        password: 'password',
        port: 5432,
    });
  }

  async connect() {
    try {
      await this.pool.connect();
      console.log('Connection made to PostgreSQL...');
    } catch (error) {
      console.error('Error connecting to PostgreSQL:', error);
    }
  }

  async addUser(osuId, webhooks, lastUpdated) {
    const query = 'INSERT INTO users (osu_id, webhooks, last_updated) VALUES ($1, $2, $3)';
    const values = [osuId, webhooks, lastUpdated.toISOString()];

    try {
      await this.pool.query(query, values);
      console.log('User added successfully.');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }

  async getUser(osuId) {
    const query = 'SELECT * FROM users WHERE osu_id = $1';
    const values = [osuId];

    try {
      const result = await this.pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error retrieving user:', error);
      throw error;
    }
  }

  async getUsers() {
    const query = 'SELECT * FROM users';

    try {
      const result = await this.pool.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error retrieving users:', error);
      throw error;
    }
  }
}

module.exports = UserDB;
