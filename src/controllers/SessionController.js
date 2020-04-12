const connection = require('../database/connection');

module.exports = {
  async store(request, response) {
    const { id } = request.body;

    const ong = await connection('ongs').select('name').where('id', id).first();

    if (!ong) return response.status(404).json({ error: 'ONG not found.' });

    return response.json(ong);
  },
};
