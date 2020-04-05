const yup = require('yup');

const modelImage = require('../models/Imagens');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await modelImage.paginate(
      {},
      {
        page,
        limit: 10,
      }
    );
    console.log(products);
    return res.json(products);
  },
  async show(req, res) {
    const product = await modelImage.findById(req.params.id);
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

    const product = await modelImage.create(req.body);

    return res.json(product);
  },
  async uploads(req, res) {
    const { originalname: name, size, filename: key } = req.file;

    const image = await modelImage.create({
      name,
      size,
      key,
      url: '',
    });
    return res.json(image);
  },
};
