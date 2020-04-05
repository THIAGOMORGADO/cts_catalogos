const yup = require('yup');
const User = require('../models/Usuario');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const user = await User.paginate(
      {},
      {
        page,
        limits: 10,
      }
    );
    return res.json(user);
  },
};
