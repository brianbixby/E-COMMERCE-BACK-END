"use strict";

const router = require('express').Router();
const { Tag, Product } = require('../../models');

router.get('/', async (req, res) => {
	try {
		const data = await Tag.findAll({ include: [Product] });
		res.json(data);
	} catch (err) {
		console.log("err: ", err);
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const data = await Tag.findByPk(req.params.id, { include: [Product] });
		data === null ? res.status(204).json(data) : res.json(data);
	} catch (err) {
		console.log("err: ", err);
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

router.post('/', async (req, res) => {
	try {
		const data = await Tag.create(req.body);
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
		const data = await Tag.update(req.body, { where: { id: req.params.id } });
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
		const data = await Tag.destroy({ where: { id: req.params.id } });
		data === 0 ? res.status(204).json(data) : res.json(data);
	} catch (err) {
		console.log("err: ", err);
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});

module.exports = router;
