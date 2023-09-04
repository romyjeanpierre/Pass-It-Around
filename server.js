const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`99 bottles of beer on the wall <a href='/98'>take one down, pass it around</a>`);
});

app.get('/:number_of_bottles', (req, res) => {
  const {number_of_bottles} = req.params;
  const new_index = number_of_bottles - 1;

  console.log(number_of_bottles);

  if (number_of_bottles === '0') {
    res.send
    (`There are 0 bottles left <a href='/'>Click here</a> to start over`)
  } else {
    res.send
    (`${number_of_bottles} bottles of beer on the wall <a href='/${new_index}'>take one down, pass it around</a>`)
  }
  
});





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});