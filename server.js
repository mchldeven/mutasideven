const express = require('express');
const mutasiRoutes = require('./src/mutasi/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('universalbpr');
});

app.use('/api/mutasi', mutasiRoutes);

app.listen(port, () => console.log(`sukses berjalan di port ${port}`));
