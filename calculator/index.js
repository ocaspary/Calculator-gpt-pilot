const express = require('express');
const math = require('mathjs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/calculate', (req, res) => {
  const { expression } = req.body;
  try {
    const result = math.evaluate(expression);
    res.send({ result: result.toString() });
  } catch (error) {
    res.status(500).send({ error: 'Error evaluating the expression' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});