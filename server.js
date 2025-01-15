const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/verify', (req, res) => {
  const { mobile, email, aadhar, pan, gstin } = req.body;

  // Perform validation and verification logic here
  if (!mobile || !email || !aadhar || !pan || !gstin) {
    return res.status(400).send({ message: 'All fields are required' });
  }

  // Assuming all verification passes
  return res.status(200).send({ message: 'Verification successful' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
