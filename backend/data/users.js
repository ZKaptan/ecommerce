import bcrypt from "bcryptjs";

const users = [
	{
		name: "Admin User",
		email: "admin@example.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		name: "Deniz Kaptan",
		email: "deniz@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		name: "Derin Kaptan",
		email: "derin@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
];

export default users;
