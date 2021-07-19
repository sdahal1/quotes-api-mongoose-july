//routes needs to know about the controller
const QuoteController = require("../controllers/quotes.controller");

module.exports = app =>{
    app.get("/api/quotes", QuoteController.findAllQuotes)
    app.post("/api/quotes/create", QuoteController.createQuote)
    app.get("/api/quotes/:quoteId", QuoteController.findOneQuote)
}