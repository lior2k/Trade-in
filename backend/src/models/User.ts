import mongoose from 'mongoose';

export interface IUser {
	username: string;
	password: string;
}

// Define a schema for the User model
const UserSchema = new mongoose.Schema(
	{
		// Required fields
		username: { type: String, required: true },
		password: { type: String, required: true },
	},
	{
		// Add timestamps to the schema
		timestamps: true,
	}
);

// Create the User model using the schema
export const User = mongoose.model('User', UserSchema, 'Users');
