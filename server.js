import app from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

process.on("SIGINT", () => {
	server.close(() => console.log(`Exit Server`));
});
