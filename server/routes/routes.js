var express = require('express');
var router = express.Router();
var models = require('../models.js');
var _ = require('underscore');
var Card = models.Card;
var User = models.User;
//////////////////////////////// PUBLIC ROUTES ////////////////////////////////
// Users who are not logged in can see these routes

router.get('/', function(req, res, next) {
  res.json({test: 'test'});
});

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
      res.json(newUser);
    }
    else {
      res.json(user);
    }
  });
});

router.get('/getTenCards/:userId', function(req, res, next) {
  // user --> user viewed cards && user posted cards
  // all cards --> take cards not in user cards
  // return random of those random cards
  var userId = req.params.userId

  User.findById(userId, function(err, user) {
    // did not error catch here
    if(user) {
      // should happen on newly registered user
      if(user.myCards.length === 0 && user.history.length === 0) {
        Card.find({}, function(err, cards) {
          var shuffledCards = _.shuffle(cards);
          var tenCards = shuffledCards.slice(0, 10);
          // shuffles cards and sends to front end
          res.json({cards: tenCards, stylePoints: user.stylePoints});
        });

      } else {
        // filters card array for just card with IDS
        Card.find({}, function(err, cards) {
          var cardIds = cards.map(function(card) {
            return card._id;
          });
          var usersCards = user.myCards;
          var userSeenCards = user.history;
          // now find cards in cardsIds that are NOT in userCards AND userSeenCards
          var uniqueCards = cardsIds.filter(function(cardId) {
            (cardId.indexOf(userCards) === -1 && cardId.indexOf(userSeenCards) === -1);
          });
          // shuffles cards and sends to front end
          var shuffledCards = _.shuffle(uniqueCards);
          var tenCards = shuffledCards.slice(0, 10);
          res.json({cards: tenCards, stylePoints: user.stylePoints})
        });
      }
    } else {
      res.json({success: false})
    }

  })

})

router.post('/vote', function(req, res, next) {
  var cardId = req.body.cardId;
  var userId = req.body.userId;
  var vote = req.body.vote;

  User.findbyId(userId, function(err, user) {
    if(!user) {
      res.json({success: false})
    } else {
      // pushes user histoy to
      var voteObj = {
        card: cardId,
        dateVoted: new Date().toISOString(),
        correctness: null,
        myVote: vote
      }

      user.history.push(voteObj);
      Card.findById(cardId, function(err, card) {
        if(!card) {
          res.json({success: false});
        } else {
          card.views.push(userId);
          if(vote === 1) {
            card.votesA.push(userId);
          } else if(vote === 2) {
            card.votesB.push(userId);
          }
        }
        card.save();
      })
    }
    user.save();
  })

})

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
