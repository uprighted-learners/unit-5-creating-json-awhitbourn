const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // You can choose any port that is free

// Serve the answers.json file
app.get('/answers', (req, res) => {
  res.sendFile(path.join(__dirname, 'api', 'answers.json'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
