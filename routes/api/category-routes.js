"use strict";

const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
	try {
		const data = await Category.findAll({ include: [Product] });
		res.json(data);
	} catch (err) {
		console.log("err: ", err);
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const data = await Category.findByPk(req.params.id, { include: [Product] });
		data === null ? res.status(204).json(data) : res.json(data);
	} catch (err) {
		console.log("err: ", err);
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.post('/', async (req, res) => {
	try {
		const data = await Category.create(req.body);
		res.json(data);
	} catch (err) {
		console.log("err: ", err);
		if (err && err.err && err.err.name === "SequelizeValidationError") {
			res.status(400).json(err);
		}
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.put('/:id', async (req, res) => {
	try {
		const data = await Category.update(req.body, { where: { id: req.params.id } });
		data[0] === 0 ? res.status(204).json(data) : res.json(data);
	} catch (err) {
		console.log("err: ", err);
		if (err && err.err && err.err.name === "SequelizeValidationError") {
			res.status(400).json(err);
		}
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const data = await Category.destroy({ where: { id: req.params.id } });
		data === 0 ? res.status(204).json(data) : res.json(data);
	} catch (err) {
		console.log("err: ", err);
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

module.exports = router;
