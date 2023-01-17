const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// run server 
const startServer = async () => {
    try {
        app.listen(port, () => console.log(`Server listening on port ${port}...`));
    } catch (error) {console.log(error);}
};

startServer(); 