const mongoose = require("mongoose");
const changepassword = new mongoose.Schema({
    oldPassword: {
        type: String,
        require: true,
      },
      newPassword: {
        type: String,
        require: true,
      },
});
module.exports = mongoose.model("changepassword",changepassword);

 
