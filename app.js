const express = require('express');
const port = 3005;
const es6Renderer = require('express-es6-template-engine');
const app = express();
const rootController = require('./routes/index');

app.engine('html',es6Renderer);
app.set('views','views');
app.set('view engine', 'html');

app.use('/', rootController);

app.use('/ceos', require('./routes/ceos'));


app.listen(port, () => {
  console.log(`Yo Joe! Cpming in hot at http://localhost:${port}`)
})