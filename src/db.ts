import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "password",
  port: 5432,
  database: "TestDB",
  entities: [User],
  logging: true,
  synchronize: true,
});
