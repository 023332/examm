import bcrypt from 'bcrypt';

module.exports = {
    generateResponse: (status, message, data = null) => {
        return {
            status,
            message,
            data
        };
    },

    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    },

    hashPassword: async (password) => {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    },

    comparePassword: async (password, hashedPassword) => {
        const bcrypt = require('bcrypt');
        return await bcrypt.compare(password, hashedPassword);
    },

    formatDate: (date) => {
        return new Date(date).toLocaleDateString('en-US');
    }
};