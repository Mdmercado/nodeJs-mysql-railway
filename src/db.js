import { createPool } from "mysql2/promise";
export const conn = createPool({
  user: "root",
  password: "",
  host: "127.0.0.1",
  port: 3306,
  database: "dbnodeprueba",
});
