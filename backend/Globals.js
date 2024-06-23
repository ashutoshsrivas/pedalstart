const mysqlcred = {
    host: "151.106.117.51",
    user: "u409171596_pedalstart",
    password: "Pedal@start123",
    database: "u409171596_pedalstart",
    waitForConnections: true,
    connectionLimit: 100,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  } ;

  module.exports = {mysqlcred};
