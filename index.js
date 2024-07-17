const express = require('express');
const path = require('path');
const fs = require("fs")
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '.')));

// Middleware to parse JSON body
app.use(bodyParser.json());

// Endpoint to handle file append
app.post('/api/append', (req, res) => {
    const filePath = path.join(__dirname, 'data.txt'); // Adjust file path as needed

    // Assuming req.body.data contains the data to append
    const data = req.body.data + '\n'; // Ensure to append new line after each entry

    // Append data to file
    fs.appendFile(filePath, data, (err) => {
        if (err) {
            res.status(500).send('Error appending data to file');
        } else {
            res.status(200).send('Data successfully appended to file');
        }
    });
});


app.listen(port, () => {
    // console.log(`Server is running on http://localhost:${port}`);
});
