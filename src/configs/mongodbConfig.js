"use strict"
import dotenv from "dotenv";
dotenv.config();

export const devConfig = {
    port: process.env.DEV_PORT || 3333,
    host: process.env.DEV_HOST || "127.0.0.1",
    dbName: process.env.DEV_DBNAME || "shop_DEV",
};

export const productConfig = {
    port: process.env.PRO_PORT || 3000,
    host: process.env.PRO_HOST || "127.0.0.1",
    dbName: process.env.PRO_DBNAME || "shop_PRO",
}