/**
* The Core API container
*/
const API = (app) => {
  /**
  * main api
  */
  const MainAPI = require('./main');
  const mainApiInstance = new MainAPI(app);
  /**
  * user api
  */
  const UserAPI = require('./user');
  const userApiInstance = new UserAPI(app);
  /**
  * another api
  */
}
module.exports = API;
