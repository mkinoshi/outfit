var express = require('express');
var router = express.Router();
var models = require('../models.js');
var _ = require('underscore');
var Card = models.Card;
var User = models.Card;
//////////////////////////////// PUBLIC ROUTES ////////////////////////////////
// Users who are not logged in can see these routes

router.get('/', function(req, res, next) {
  res.json({test: 'test'});
});

// this has not been tested yet
router.post('/getUser', function(req, res, next) {
  var facebookId = req.body.facebookId;
  var name = req.body.name;
  User.findOne({facebookId: facebookId}, function(err, user) {
    if(!user) {
      var newUser = new User({
        facebookId: facebookId,
        name: name,
        // age: null,
        // location: null,
        // gender: null,
        myCards: [],
        stylePoints: 0,
        history: []
      });
      newUser.save(function(err) {
        if(err) {
          console.log('The user failed to save', err);
        }

      })
      res.json(user);
    }
     else {
      res.json(user);
    }
  });
});

router.post('/getTenCards', function(req, res, next) {
  // user --> user viewed cards && user posted cards
  // all cards --> take cards not in user cards
  // return random of those random cards
  var userId = req.params.userId
  var cards = Card.find({}, function(err, cards) {
    return cards
  });
  User.find({_id: userId}, function(err, user) {
    // should happen on newly registered user
    if(user.myCards.length === 0 && user.history.length === 0) {
      // shuffles cards and sends to front end
      var shuffledCards = _.shuffle(cards);
      var tenCards = shuffledCards.slice(0, 10);
      res.json({cards: tenCards, stylePoints: user.stylePoints});
    } else {
      // filters card array for just card with IDS
      var cardIds = cards.map(function(card) {
        return card._id;
      });
      var usersCards = user.myCards;
      var userSeenCards = user.history;
      // now find cards in cardsIds that are NOT in userCards AND userSeenCards
      var uniqueCards = cardsIds.filter(function(cardId) {
        (cardId.indexOf(userCards) === -1 && card.indexOf(userSeenCards) === -1);
      });
      // shuffles cards and sends to front end
      var shuffledCards = _.shuffle(uniqueCards);
      var tenCards = shuffledCards.slice(0, 10);
      res.json({cards: tenCards, stylePoints: user.stylePoints})
    }
  })

})

router.post('/vote', function(req, res, next) {
  var cardId = req.body.cardId;
  var userId = req.body.userId;
})

router.post('/uploadcard', function(req, res, next) {
  console.log("this is req.body in post/uploadcard", req.body)
  var newCard = new Card({
    author: req.body.userId,
    dateCreated: Date.now(),
    finalDecision: 0, // what the poster decided, 0 is undecided 1 is first choice, 2 is second choice
    imageA: req.body.imageA,
    imageB: req.body.imageB,
    votesA: [], // userIds
    votesB: [],  // userIDs
    views: [],
  });
  newCard.save(function(err){
    if(err){
      res.json({success: false});
    } else {
      res.json({success: true});
    }
  })
})

router.get('/getcard', function(req, res, next){
  var id = req.params.match.id;
  console.log("this is req.params.match.id");
  Card.findOne({_id: id}, function(err, card){
    if(err){
      console.log("error getting card:", err);
      res.json({success: false});
    } else {
      res.json({card: card})
    }
  })
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
