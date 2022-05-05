"use strict";

const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// to do include product tags
router.get('/', async (req, res) => {
	try {
		const data = await Tag.findAll({ include: [Product] });
		res.json(data);
	} catch (err) {
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.get('/:id', async (req, res) => {
	// to do inclide product tag
	try {
		const data = await Tag.findByPk(req.params.id, { include: [Product] });
		res.json(data);
	} catch (err) {
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.post('/', async (req, res) => {
	try {
		// to do validate keys
		const data = await Tag.create(req.body);
		res.json(data);
	} catch (err) {
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.put('/:id', async (req, res) => {
	try {
		// to do try to create and update other fields and id
		const data = await Tag.update(req.body, { where: { id: req.params.id } });
		res.json(data);
	} catch (err) {
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const data = await Tag.destroy({ where: { id: req.params.id } });
		console.log("deleted data: ", data);
		res.json(data);
	} catch (err) {
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

module.exports = router;
