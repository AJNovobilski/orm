const router = require('express').Router();
const { Category, Product } = require('../../models');



// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  try {
    const catdata = await Category.findAll();
    res.status(200).json(catdata);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const catdata = await Category.findByPk(req.params.id)


    if (!catdata) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(catdata);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const catdata = await Category.create(req.body);
    res.status(200).json(catdata);
  } catch (err) {
    res.status(400).json(err);
  }});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const catdata = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!catdata) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(catdata);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;


