"use strict";
import mongoose from "mongoose";
import { countConnect } from "../helpers/checkConnect.js";

const connectString = "mongodb://127.0.0.1/shopDEV";

class Database {
	constructor() {
		this.connect();
	}

	connect(type = "mongodb") {
		if (1 === 1) {
			mongoose.set("debug", true);
			mongoose.set("debug", { color: true });
		}

		mongoose
			.connect(connectString)
			.then(() =>
				console.log(
					`Connected Mongodb Success and Number of connection is: ${countConnect()}`
				)
			)
			.catch((err) => console.log("Error Connect"));
	}

	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}
}

const instanceMongodb = Database.getInstance();

export default instanceMongodb;
