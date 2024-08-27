/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgresql://dev_3hkp_user:MXCSRLvJ1NZ8NCc6brspW7W32AhCP3eZ@dpg-cr5oopbv2p9s73aipdkg-a.oregon-postgres.render.com/dev_3hkp?ssl=true",
  DATABASE_URL_DEVELOPMENT = "postgresql://dev_3hkp_user:MXCSRLvJ1NZ8NCc6brspW7W32AhCP3eZ@dpg-cr5oopbv2p9s73aipdkg-a.oregon-postgres.render.com/dev_3hkp?ssl=true",
  DATABASE_URL_TEST = "postgresql://dev_3hkp_user:MXCSRLvJ1NZ8NCc6brspW7W32AhCP3eZ@dpg-cr5oopbv2p9s73aipdkg-a.oregon-postgres.render.com/dev_3hkp?ssl=true",
  DATABASE_URL_PREVIEW = "postgresql://dev_3hkp_user:MXCSRLvJ1NZ8NCc6brspW7W32AhCP3eZ@dpg-cr5oopbv2p9s73aipdkg-a.oregon-postgres.render.com/dev_3hkp?ssl=true",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "back-end", "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "back-end", "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "back-end", "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "back-end", "src", "db", "migrations"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "back-end", "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "back-end", "src", "db", "migrations"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "back-end", "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "back-end", "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
