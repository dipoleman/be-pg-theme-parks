const db = require('../db/connection');
exports.selectParks = () => {
    return db.query('SELECT * FROM parks;')
      .then((result) => {
        return result.rows;
      });
    
};

exports.updateParkById = () => {};

exports.removeParkById = () => {};


