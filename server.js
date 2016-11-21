const express = require('express');

// Create app
const app = express();
app.use(express.static('public'));
app.listen(9000, () => {
    console.log('Express server is up on port 9000');
});
