const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const app = express();
const port = 3000;

try{
  app.use(express.json());
  app.use('/api/v1', apiRoutes);

  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Simple REST API! Use /api/v1/create-session to start.' });
  });
  
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
  
}catch(error){
  throw new Error(`Error: ${error}`)
}