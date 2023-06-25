-- Create a new database
CREATE DATABASE user_info_storage_db;

-- Switch to the newly created database
\c user_info_storage_db;

-- Create the users table
-- TODO: users needs to be renamed as "user" as per convention
CREATE TABLE users (
  osu_id SERIAL PRIMARY KEY,
  webhooks TEXT[],
  last_updated TIMESTAMP
);
