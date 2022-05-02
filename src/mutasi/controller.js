const pool = require('../../db');
const queries = require('./queries');

const getMutasis = (req, res) => {
  pool.query(queries.getMutasis, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const getMutasiById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getMutasiById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};
module.exports = {
  getMutasis,
  getMutasiById,
};
