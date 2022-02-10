// import/require the model

// CONNECT YOUR APP TO THE MONGODB
require('./configs/database.config');

// ****************************************************************************************************
// ****************************************************************************************************
// Create new cats (insert document in the DB (uses insertOne() and insertMany()))
// ----------------------------------------------------------------------------

// .create() is a mongoose method and under the hood uses insertOne and insertMany

// create one document in the cats collection
Cat

// create multiple documents in the cats collection

Cat.create({
    name: "Garfield",
    age: 15,
    color: "orange",
    //this will break the schema BUT Mongo won't complain
    //It's YOUR responsibility to adhere to the schema
    friends: ["marco", "carol", "carlos", "Yin"]
})