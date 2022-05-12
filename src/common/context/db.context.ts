import { User } from "./../../userService/core/domain/Models/User";
import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
  type: process.env.DB_DIALECT as "mysql" | "mssql" | "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as unknown as string),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User],
  extra: {
    trustServerCertificate: true,
  },
  synchronize: true,
  logging: !["test", "production"].includes(process.env.NODE_ENV as string),
});
