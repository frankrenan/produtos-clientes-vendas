module.exports = {
  type: process.env.TYPEORM_TYPE || "mysql",
  host: process.env.TYPEORM_HOST || "teste",
  port: process.env.TYPEORM_PORT || 3306,
  username: process.env.TYPEORM_USERNAME || "teste",
  password: process.env.TYPEORM_PASSWORD || "teste",
  database: process.env.TYPEORM_DATABASE || "base_teste",
  synchronize: process.env.TYPEORM_SYNCHRONIZE || true,
  logging: process.env.TYPEORM_LOGGING || false,
  entities: [process.env.TYPEORM_ENTITIES || "src/entity/**/*.ts"],
  migrations: [process.env.TYPEORM_MIGRATIONS || "src/migrations/**/*.ts"],
  cli: {
    entitiesDir: process.env.TYPEORM_ENTITIESDIR || "src/entity",
    migrationsDir: process.env.TYPEORM_MIGRATIONSDIR || "src/migration",
  },
};