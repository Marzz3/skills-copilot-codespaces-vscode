// Create web server
// 1. Install express
// 2. Require express
// 3. Create an instance of express
// 4. Create a route for GET /comments
// 5. Send back some JSON

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json([
    { id: 1, author: 'Morgan', body: 'This is a comment' },
    { id: 2, author: 'Bryan', body: 'This is another comment' }
  ]);
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});

// Test with curl
// curl http://localhost:3001/comments

