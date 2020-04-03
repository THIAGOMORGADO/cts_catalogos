const yup = require('yup');
const Product = require('../models/Product');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate(
      {},
      {
        page,
        limit: 10,
      }
    );
    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);
    console.log(product);
    return res.json(product);
  },
  async store(req, res) {
    const schema = yup.object().shape({
      title: yup.string().required(),
      description: yup.string().required(),
      url: yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validação falhou, verifique seus dados' });
    }

    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(product);
    return res.json(product);
  },
  async detroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
