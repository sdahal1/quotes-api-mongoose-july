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