const express = require('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess.js');


app.use('/db', dbRoutes);
// This line makes the build folder publicly available.
app.use(express.static('build'));

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
