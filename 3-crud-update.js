// import/require the model

// CONNECT YOUR APP TO THE MONGODB
require('./configs/database.config');

// ****************************************************************************************************
// ****************************************************************************************************
// Updating cats in the DB
// ----------------------------------------------------------------------------

Cat.findByIdAndUpdate(
    "6205007cb7c1c743378c5783", 
    {$set: {name: "Sandra"}},
    {new: true})
    .then((cat)=> console.log(cat));

//
// Update a cat by id

// Update all cats named Garfield

// Update one specific cat named Garfield
