const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

const filePath = 'A28142BD02974E46977517F007312C41.txt';

app.get('/.well-known/pki-validation/A28142BD02974E46977517F007312C41.txt', (req, res) => {
  // Reading file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(`File content:\n${data}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
