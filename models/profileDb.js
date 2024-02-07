const database = require('../config/database');

// read
const readProfile = () => {
    const query = 'SELECT * FROM profile';
    return database.execute(query)
}

module.exports = {
    readProfile
}