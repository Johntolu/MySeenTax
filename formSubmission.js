const express = require('express');
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.json()); // Use built-in middleware to parse JSON request bodies

// Serve static files from the public directory
app.use(express.static('public'));

// Parse incoming form submissions
app.use(express.urlencoded({ extended: true }));

const isAlphaAndLength = (value) => {
  if (!/^[a-zA-Z]+$/.test(value)) {
    throw new Error('Value must contain only letters.');
  }
  if (value.length < 2) {
    throw new Error('Value must be at least 2 letters long.');
  }
  return true;
};

// Handle form submission
app.post(
    '/submit-form',
    [
      body('firstName')
        .isAlpha()
        .isLength({ min: 2 })
        .withMessage('First name must be at least 2 letters and contain only letters.'),
      body('lastName')
        .isAlpha()
        .isLength({ min: 2 })
        .withMessage('Last name must be at least 2 letters and contain only letters.'),
      body('email')
        .isEmail()
        .withMessage('Invalid email format.'),
      body('message')
        .trim()
        .notEmpty()
        .withMessage('Message cannot be empty.'),
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const email = req.body.email;
      const message = req.body.message;
  
      // If all validation passes, do something with the data
      // Example: send an email using NodeMailer
      // ...

  // Send a response back to the client
  res.status(200).send('Form submitted successfully');
});

// Route to display a confirmation message
app.get('/confirmation', (req, res) => {
    // Code to display confirmation message goes here
    res.status(200).send('Thank you for submitting the form!');
});

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));
