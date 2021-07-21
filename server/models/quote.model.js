const mongoose = require("mongoose");

//create a table to store quotes in
const QuoteSchema = new mongoose.Schema({

    content: {
        type: String,
        required: [true, "Content is required tho'"],
        maxLength: [1000, "Thats not a quote, thats a speech fam!"],
        minLength: [3, "Quote must be at least 3 characters long"]
    },
    author: {
        type: String,
        required: [true, "Author is required. Who said it?? we needdzzz to know!"]
    },


    //this one is options b/c there is not required validation key
    quotedOn: {
        type: Date
    },

    //for a checkbox field
    isMotivational:{
        type: Boolean
    },

    popularityLevel:{
        type:Number,
        max:[10, "Quote can't be more fire that 10"],
        min:[1, "Quote cant be that bad that its less than 1"]
    }

}, {timestamps:true} )

const Quote = mongoose.model("Quote", QuoteSchema );

module.exports = Quote;