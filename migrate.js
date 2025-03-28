import mysql from 'mysql';
 import util  from 'util';
 import db from './clients/db';

const migrate = async () => {
    const connection = db.getConnection();

    const query = util.promisify(connection.query).bind(connection);

    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    try {
        await query(createUsersTable);
        console.log('Users table created or already exists.');
    } catch (error) {
        console.error('Error creating users table:', error);
    } finally {
        connection.end();
    }
};

migrate().then(r => {

})