const getMutasis = 'SELECT * FROM mutasi';
const getMutasiById = 'SELECT * FROM mutasi WHERE id = $1';

module.exports = {
  getMutasis,
  getMutasiById,
};
