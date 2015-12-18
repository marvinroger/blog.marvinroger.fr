var path = require('path');

var config = {
  production: {
    url: 'https://blog.marvinroger.fr',
    mail: {
      transport: 'SMTP',
      options: {
        service: 'Mailgun',
        auth: {
          user: 'postmaster@mailgun.marvinroger.fr', // mailgun username
          pass: process.env.MAILGUN_PASSWORD // mailgun password
        }
      }
    },
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost.db')
      },
      debug: false
    },
    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    }
  }
};

module.exports = config;
