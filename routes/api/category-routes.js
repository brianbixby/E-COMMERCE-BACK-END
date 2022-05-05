"use strict";

const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
	try {
		const data = await Category.findAll({ include: [Product] });
		res.json(data);
	} catch (err) {
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const data = await Category.findByPk(req.params.id, { include: [Product] });
		res.json(data);
	} catch (err) {
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.post('/', async (req, res) => {
	// to do validate keys
	try {
		const data = await Category.create(req.body);
		res.json(data);
	} catch (err) {
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.put('/:id', async (req, res) => {
	// to do try to create and update other fields and id
	try {
		const data = await Category.update(req.body, { where: { id: req.params.id } });
		res.json(data);
	} catch (err) {
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const data = await Category.destroy({ where: { id: req.params.id } });
		console.log("deleted data: ", data);
		res.json(data);
	} catch (err) {
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

module.exports = router;
