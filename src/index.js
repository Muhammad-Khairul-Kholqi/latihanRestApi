require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
})