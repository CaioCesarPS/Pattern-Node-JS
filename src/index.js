const express = require('express');

const port = 3333;
const app = express();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
