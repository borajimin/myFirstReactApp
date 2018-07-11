const express = require('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess.js');
const mongoose = require('mongoose');


mongoose.connect(MONGODB_URI);

const testTodo = new TodoItem({
  task: "test task"
});

testTodo.save()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  })
});

app.use('/db', dbRoutes);
// This line makes the build folder publicly available.
app.use(express.static('build'));

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
