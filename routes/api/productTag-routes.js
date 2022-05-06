"use strict";

const router = require('express').Router();
const { ProductTag } = require('../../models');

router.post('/', async (req, res) => {
	try {
		const data = await ProductTag.create(req.body);
		res.json(data);
	} catch (err) {
		console.log("err: ", err);
		if (err && err.err && err.err.name === "SequelizeValidationError") {
			res.status(400).json(err);
		}
		res.status(500).json({ msg: "an error occurred: ", err });
	}
});