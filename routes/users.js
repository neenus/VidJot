const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// User login route
router.get('/login', (req, res) => {
  res.render('users/login');
});

// User register route
router.get('/register', (req, res) => {
  res.render('users/register');
});

// User register post
router.post('/register', (req, res) => {
  let errors = [];
  if (req.body.password.length < 4) {
    errors.push({text: 'Password must be at least 4 characters'});
  }

  if (req.body.password != req.body.confirmPassword) {
    errors.push({text: 'Passwords must match'});
  }

  if(errors.length > 0){
    res.render('users/register', {
      errors: errors,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword
    });
  } else {
    res.send('Passed');
  }
});

module.exports = router;