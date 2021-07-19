//routes needs to know about the controller
const QuoteController = require("../controllers/quotes.controller");

module.exports = app =>{
    //all quotes
    app.get("/api/quotes", QuoteController.findAllQuotes)

    //create new quote
    app.post("/api/quotes/create", QuoteController.createQuote)

    //get one quote by id
    app.get("/api/quotes/:quoteId", QuoteController.findOneQuote)

    //update quote
    app.put("/api/quotes/:quoteId", QuoteController.updateQuote)

    //delete quote
    app.delete("/api/quotes/:quoteId", QuoteController.deleteQuote)

    //random quote
    app.get("/api/quotes/find/random", QuoteController.findRandomQuote)

}