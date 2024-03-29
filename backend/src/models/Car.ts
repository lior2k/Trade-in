import mongoose from 'mongoose';

// Define a schema for the User model
const CarSchema = new mongoose.Schema(
	{
		// Required fields
		title: { type: String, required: true },
		manufacturer: { type: String, required: true },
		model: { type: String, required: true },
		// Optional fields
		body: { type: String },
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
export default mongoose.model('Car', CarSchema, 'Cars');
