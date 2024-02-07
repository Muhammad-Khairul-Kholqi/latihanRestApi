const profileDb = require('../models/profileDb');

// function read 
const readProfile = async(req, res) => {
    try {
        const [data] = await profileDb.readProfile();
        res.json({
            message: 'Get berhasil!',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error.message
        })
        
    }
}

module.exports = {
    readProfile
}