// import/require the model

// CONNECT YOUR APP TO THE MONGODB
require('./configs/database.config');

// ****************************************************************************************************
// ****************************************************************************************************
// Reading the cats from DB (use find(), findOne(), findById())
// ----------------------------------------------------------------------------

// .find() we are always getting array back as a response

// .findById() we are always getting object back as a response

// Bonus: Count documents
Cat.find({
    age: {$gt: 0},
    color: {$in: ["white", "orange", "pink"]},
    friends: {$elemMatch: {$eq: "marco"}}
})
.then(cats =>cats.forEach(cat=>console.log(cat)))
.catch((error)=> console.log(error));