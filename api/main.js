/**
* Required modules
*/
const path = require('path');
/**
* Main app api
*/
class MainAPI {
  /**
  * The constructor
  */
  constructor(app) {
    this.app = app;
    this.calls = {
      entryPoint:"/"
    };
    this.entryPoint();
  }
  /**
  * entry point
  */
  entryPoint() {
    this.app.get(this.calls.entryPoint,(req,res) => {
      console.log("running");
      res.sendFile(path.join(global.rootPath, 'index.html'));
    });
  }
}
module.exports = MainAPI;
