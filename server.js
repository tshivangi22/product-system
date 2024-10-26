const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes'); // Ensure routes.js is also created in the same folder

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
