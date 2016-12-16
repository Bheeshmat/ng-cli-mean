const express = require('express');
const router = express.Router();
const axios = require('axios');
const API = 'https://localhost:3000'

router.get('/', (req, res) => {
  res.send('api works');
})

router.get('/people', (req, res) => {
  // Get from mock api
  // Replace with mongoDB later
  axios.get(`${API}/people`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;
