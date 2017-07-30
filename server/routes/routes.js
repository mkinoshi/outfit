var express = require('express');
var router = express.Router();
var models = require('../models.js');
var Card = models.Card;
var User = models.Card;
//////////////////////////////// PUBLIC ROUTES ////////////////////////////////
// Users who are not logged in can see these routes

router.get('/', function(req, res, next) {
  res.json({test: 'test'});
});

router.post('/getCards', function(req, res, next) {
  var username = req.body.username;
  User.findOne({username: username}, function(err, user) {
    if(!user) {
      var newUser = new User({

      });
    }


  });
});

router.get('/uploadCard', function(req, res, next) {
  var newCard = new Card({
    // enter cool card information right here
    // card contains two different pictures
  });
})

router.post('/voteCard', function(req, res, next) {

});

///////////////////////////// END OF PUBLIC ROUTES /////////////////////////////

router.use(function(req, res, next){
  if (!req.user) {
    res.redirect('/login');
  } else {
    return next();
  }
});

//////////////////////////////// PRIVATE ROUTES ////////////////////////////////
// Only logged in users can see these routes


///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////

module.exports = router;
