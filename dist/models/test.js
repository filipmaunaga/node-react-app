"use strict";
// Here is an example of a Mongoose schema where there is a property called "items" with a value equal to an array of objects:
// Copy code
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mySchema = new Schema({
    items: [
        {
            name: String,
            quantity: Number,
        },
    ],
});
// To push items into the "items" array, you can use the push method on the "items" property of a document. Here is an example:
//Copy code
const MyModel = mongoose.model("MyModel", mySchema);
const myDocument = new MyModel();
myDocument.items.push({ name: "item1", quantity: 2 });
myDocument.items.push({ name: "item2", quantity: 1 });
myDocument.save(function (err) {
    if (err)
        return handleError(err);
    // saved!
});
// If you want to push multiple items at once, you can use the concat method:
//Copy code
const MyModel = mongoose.model("MyModel", mySchema);
const myDocument = new MyModel();
myDocument.items = myDocument.items.concat([
    { name: "item1", quantity: 2 },
    { name: "item2", quantity: 1 },
]);
myDocument.save();
//Note that you need to use the save() method to persist the changes made to the document to the database.
