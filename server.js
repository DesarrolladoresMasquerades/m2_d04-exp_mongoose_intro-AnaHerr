

require("./configs/database.config");

const Cat = require("./models/Cat.model");

//Cat.findOneAndUpdate() is dangerous because it will update
// if the filtered object is "wrong"

