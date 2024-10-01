const cypress = require("cypress");
const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server'); //Database Plugin information

  module.exports = defineConfig({
    viewportWidth: 1080,
    viewportHeight: 720,
    e2e: {
      //implement node event listeners here
      setupNodeEvents(on, config) {
      //Database Configuration  
        config.db = {
          userName: "Oggy'sServer",
          password: "Mibro@616",
          server: "oggys-server.database.windows.net",
          options: {
              database: "oggys-database",
              encrypt: true,
              rowCollectionOnRequestCompletion : true
          }
      }
      //Passing Database Information
      tasks = sqlServer.loadDBPlugin(config.db);
      on('task', tasks);
    },
    specPattern: 'cypress/e2e/*.js'
  }, 
});