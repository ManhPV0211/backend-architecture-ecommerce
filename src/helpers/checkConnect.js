"use strict";

import mongoose from "mongoose";
import os from "os";
import process from "process";

const _SECONDS = 5000;

export function countConnect() {
	const numConnection = mongoose.connections.length;
	console.log(`Number of connection:::${numConnection}`);
	return numConnection;
}

export function checkOverload() {
	setInterval(() => {
		const numConnection = mongoose.connections.length;
		const numCores = os.cpus().length; //Kiểm tra số core máy tính có
		const memoryUsage = process.memoryUsage().rss; //Lấy memory đã sử dụng
		const maxConnection = numCores * 5; //giả sử mỗi core trên máy local chịu được 5 connection

		console.log(`Active connection:::${numConnection}`);
		console.log(`Memory usage:::${memoryUsage / 1024 / 1024} MB`);
		if (numConnection > maxConnection) {
			console.log(`Connection overload detected`);
		}
	}, _SECONDS);
}
