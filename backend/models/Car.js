const mongoose = require('mongoose');

// Define a schema for the User model
const CarSchema = new mongoose.Schema(
	{
		// Required fields
		title: { type: String, required: true },

		// Optional fields
		color: { type: String },
		year: { type: Number },
		km: { type: Number },
		previousOwners: { type: Number },
		isFrontPage: { type: Boolean },
		price: { type: Number },

		images: { type: [String], default: [] },
	},
	{
		// Add timestamps to the schema
		timestamps: true,
	}
);

// Create the User model using the schema
module.exports = mongoose.model('Car', CarSchema, 'cars');
