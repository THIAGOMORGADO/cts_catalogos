const yup = require('yup');
const User = require('../models/Usuario');

module.exports = {
  async useindex(req, res) {
    const { page = 1 } = req.query;
    const products = await User.paginate(
      {},
      {
        page,
        limit: 10,
      }
    );
    return res.json(products);
  },

  async useshow(req, res) {
    const product = await User.findById(req.params.id);
    console.log(product);
    return res.json(product);
  },
  async usestore(req, res) {
    const schema = yup.object().shape({
      username: yup.string().required(),
      name: yup.string().required(),
      lastName: yup.string().required(),
      age: yup.string().required(),
      email: yup.string().required(),
      password: yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validação falhou, verifique seus dados' });
    }

    const product = await User.create(req.body);

    return res.json(product);
  },

  async useupdate(req, res) {
    const product = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(product);
    return res.json(product);
  },
  async usedetroy(req, res) {
    await User.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
