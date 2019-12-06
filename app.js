const express = require('express');
const app = express();

const records = require('./records');

app.use(express.json());

// Send a GET request to /quotes to READ a list of quotes
app.get('/quotes', async (req, res)=>{
  const quotes = await records.getQuotes();
  res.json(quotes);
});

// Send a GET request to /quotes/:id to READ(view) a quote
app.get('/quotes/:id', async (req, res)=>{
  const quote = await records.getQuote(req.params.id);
  res.json(quote);
});

// Send a POST request to /quotes to  CREATE a new quote 
app.post('/quotes', async (req,res) => {
  const quote = await records.createQuote({
    quote: req.body.quote,
    author: req.body.author
  });
  res.json(quote);
});


// Send a PUT request to /quotes/:id to UPDATE (edit) a quote
// Send a DELETE request to /quotes/:id DELETE a quote 
// Send a GET request to /quotes/quote/random to READ (view) a random quote

app.listen(3000, () => console.log('Quote API listening on port 3000!'));