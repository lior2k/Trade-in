const mongoose = require('mongoose');

// Define a schema for the User model
const CarSchema = new mongoose.Schema(
	{
		// Required fields
		title: { type: String, required: true },

		// Optional fields
		color: { type: String },
		mongoID: { type: String },

		year: { type: Number },
		km: { type: Number },
		previous_owners: { type: Number },
		price: { type: Number },

		// image: {...}
	},
	{
		// Add timestamps to the schema
		timestamps: true,
	}
);

// Create the User model using the schema
module.exports = mongoose.model('Car', CarSchema, 'Cars');
