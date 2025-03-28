import db from '../clients/db';

const UserModel = {
    createUser: async (userData) => {
        const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
        const values = [userData.username, userData.password, userData.email];
        const [result] = await db.execute(query, values);
        return result.insertId;
    },

    getUserById: async (userId) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        const [rows] = await db.execute(query, [userId]);
        return rows[0];
    },

    updateUser: async (userId, userData) => {
        const query = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
        const values = [userData.username, userData.email, userId];
        await db.execute(query, values);
    },

    deleteUser: async (userId) => {
        const query = 'DELETE FROM users WHERE id = ?';
        await db.execute(query, [userId]);
    },

    getAllUsers: async () => {
        const query = 'SELECT * FROM users';
        const [rows] = await db.execute(query);
        return rows;
    }
};

module.exports = UserModel;