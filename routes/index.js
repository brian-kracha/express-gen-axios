var express = require('express');
var router = express.Router();
//requiring the axios library to utilize it in the express routes
var axios = require('axios')

/* GET home page. */
router.get('/posts', function(req, res, next) {
  // accessing the information from the api using the axios get request
  console.log('here')
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
    res.status(200).send(response.data)

  })
  .catch(err => {
    console.error(err)
  })
})

module.exports = router;
