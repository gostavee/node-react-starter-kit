/**
* Required modules
*/
const path = require('path');
const User = require(path.join(global.rootPath,'/database/models/user'));
/**
* Main app api
*/
class UserAPI {
  /**
  * The constructor
  */
  constructor(app) {
    this.app = app;
    this.calls = {
      getAll:"/users"
    };
    this.initData();
    this.getAll();

  }
  /**
  * entry point
  */
  getAll() {
    this.app.get(this.calls.getAll,(req,res) => {
      User.find({},(err,users) => {
        console.log("we have: " + users.length + " users");
      });
    });
  }
  /**
  * Add test data
  */
  initData() {
    User.find({},(err,users) => {
      if(users.length == 0) {
        for(let i = 0; i < 7; i++) {
          let user = new User({
            username: "test"+i,
            password:"test" + i,
            email:"test" + i,
            firstname:"test" + i,
            lastname: "test" + i
          });
          user.save((err,user) => {
            if(err){
              console.log(err);
            }else {
              console.log(user);
            }
          });
        }
      }
    });
  }
}
module.exports = UserAPI;
