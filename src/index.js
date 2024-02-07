require('dotenv').config();
const express = require('express');
const cors = require('cors');
const profileRoutes = require('../routes/profileRouting');
const middlewareRequest = require('../middleware/logAll');
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(middlewareRequest);
app.use('/profile', profileRoutes);

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})


app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
})