const pg = require('pg');
const {Client} = pg;

const client = new Client('postgres://localhost/the_acme_db');

client.connect();

const sync = async()=> {
  await client.query(SQL);
};

const findAllUsers = async()=> {
  const response = await client.query('Select * FROM users;');
  return response.rows;
}
const findAllDepartments = ()=> {
  const response = await client.query('Select * FROM departments;');
  return response.rows;

module.exports = {
  sync,
  findAllUsers,
  findAllDepartments
}
