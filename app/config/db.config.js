module.exports = {
  HOST: "ep-wild-night-avr1d42i-pooler.c-11.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_Ib30rBqTKytH", 
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};