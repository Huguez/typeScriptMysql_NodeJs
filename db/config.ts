import { Sequelize } from "sequelize";

const db = new Sequelize( 'curso_udemy', 'root', '', {
   host: "127.0.0.1",
   dialect: "mariadb",
   // logging: false,
} )

export default db;