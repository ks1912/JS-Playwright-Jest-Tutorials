const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "userCommentDb",
    password: "root",
});

client.connect();