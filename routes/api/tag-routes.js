const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  try {
    const tagdata = await ProductTag.findAll();
    res.status(200).json(tagdata);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagdata = await Tag.findByPk(req.params.id)


    if (!tagdata) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagdata);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const tagdata = await Tag.create(req.body);
    res.status(200).json(tagdata);
  } catch (err) {
    res.status(400).json(err);
}});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const tagdata = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagdata) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }

    res.status(200).json(tagdata);
  } catch (err) {
    res.status(500).json(err);
  }});

  

module.exports = router;
