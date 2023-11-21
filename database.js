const mysql = require("mysql");

const HOST = "localhost";
const USER = "root";
const PASSWORD = "";
const DATABASE = "medan-30-news";

const database = () => {
  const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
  });

  // Connect to Database
  connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected to ${DATABASE} as user ${USER} `);
  });

  const query = (queryString, callback) => {
    return connection.query(queryString, callback);
  };

  // Get
  const get = (databaseName, field, filter, callback) => {
    return connection.query(
      `SELECT ${field} FROM ${databaseName} WHERE ${filter}`,
      callback
    );
  };

  // Insert
  const insert = (databaseName, data, callback) => {
    const field = Object.entries(data)
      .map(([key, value]) => `${key} = '${value}'`)
      .join(", ");

    return connection.query(
      `INSERT INTO ${databaseName} SET ?`,
      field,
      callback
    );
  };

  // Update
  const update = (databaseName, data, where, callback) => {
    const field = Object.entries(data)
      .map(([key, value]) => `${key} = '${value}'`)
      .join(", ");

    return connection.query(
      `UPDATE ${databaseName} SET ? WHERE ${where}`,
      field,
      callback
    );
  };

  // Delete
  const deleteData = (databaseName, where, callback) => {
    return connection.query(
      `DELETE FROM ${databaseName} WHERE ${where}`,
      callback
    );
  };

  return { query, get, insert, update, deleteData };
};

export default database;
