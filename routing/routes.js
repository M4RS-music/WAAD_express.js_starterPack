const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { //Basic route for '/'
  res.send('get /');
});

router.get('/test/:id', (req, res) => { //Route for '/test/x' where x is an accessible value that can be set by client
  res.send('get /test with id: ' + req.params.id);
});

router.get(['/x','/y','/z'], (req, res) => { //Route for several different urls
  res.send('get /x /y /z');
});

module.exports = router;
