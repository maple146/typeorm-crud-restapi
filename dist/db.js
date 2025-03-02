"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "password",
    port: 5432,
    database: "TestDB",
    entities: [User_1.User],
    logging: true,
    synchronize: true,
});
