const Quote = require("../models/quote.model");


module.exports.findAllQuotes = (req,res)=>{
    Quote.find()
        .then(allquotes => {
            res.json({results: allquotes})
        })
        .catch(err => {
            res.json(
                {message: "something went wrong getting all the quotes", error: err}
                )
        })
}



module.exports.createQuote = (req,res)=>{
    Quote.create(req.body)
        .then(newlyCreatedQuote=>{
            res.json({results: newlyCreatedQuote})
        })
        .catch(err => {
            res.json(
                {message: "something went wrong creating a new quote", error: err}
                )
        })
}

module.exports.findOneQuote = (req, res)=>{
    Quote.findOne({_id:req.params.quoteId})
        .then(foundQuote =>{
            res.json({results: foundQuote})
        })
        .catch(err => {
            res.json(
                {message: "something went wrong finding one quote", error: err}
                )
        })
}


module.exports.updateQuote = (req, res)=>{
   
    Quote.findOneAndUpdate(
        {_id: req.params.quoteId},  //req.params.quoteId will represent the id of the quote that I want to update
        req.body,
        //req.body will represent the information i want to update the quote with 
        {new:true, runValidators:true}
        )
        .then(updatedQuote => res.json({results: updatedQuote}))
        .catch(err => {
            res.json(
                {message: "something went wrong updating one quote", error: err}
                )
        })
}


module.exports.deleteQuote = (req, res)=>{
    Quote.deleteOne({_id: req.params.quoteId})
        .then(deletedQuote=> res.json({results: deletedQuote}))
        .catch(err => {
            res.json(
                {message: "something went wrong deleting one quote", error: err}
                )
        })
}


module.exports.findRandomQuote =(req,res)=>{
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    Quote.find()
        .then(allquotes => {
            //find a random index number from 0 to the length of array-1
            let randomIndexNumber = getRandomInt(allquotes.length)
            res.json({results: allquotes[randomIndexNumber]})

        })
        .catch(err => {
            res.json(
                {message: "something went wrong getting all the quotes", error: err}
                )
        })
}