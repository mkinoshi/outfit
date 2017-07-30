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
  
  User.findById(userId, function(err, user) {
    if(err) {
      console.log('there was an error', err);
    }
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
    res.json({success: true})
  })
})

router.post('/uploadcard', function(req, res, next) {
  // console.log("this is req.body in post/uploadcard", req.body)
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
  newCard.save(function(err, newCard){
    if(err){
      res.json({success: false});
    } else {
      User.findOne({_id: req.body.userId}, function(err, user){
        user.myCards.push(newCard._id);
        user.save(function(err, user){
          if(err){
            res.json({success: false});
          } else {
            res.json({success: true, card: newCard, user: user});
          }
        })
      })
    }
  })
})

router.get('/getcard/:id', function(req, res, next){
  var id = req.params.id;
  // console.log("this is req.params.match.id", id);
  Card.findOne({_id: id}, function(err, card){
    if(err){
      console.log("error getting card:", err);
      res.json({success: false});
    } else {
      res.json({card: card})
    }
  })
})


router.post('/postclosecard', function(req, res, next) {
  var id = req.body.cardId;
  var num = req.body.finalDecision;
  // console.log("id", id);
  // console.log("num", num);
  // console.log("req.body", req.body);
  // res.json({req: req.body});
  Card.findOne({_id: id}, function(err, card){
    if(err){
      res.json({success: false});
    } else {
      // console.log("card", card);
      if(card.finalDecision){
        console.log("final decision already made!");
        res.json({success: true});
      } else {
        card.finalDecision = num;
        card.save(function(err){
          if(err){
            console.log("error saving final decision");
            res.json({success: false});
          } else {
            console.log("this is updated card:", card);
            res.json({success: true})
          }
        })
      }
    }
  })
})

router.get('/getmycards/:id', function(req, res, next){
  var id = req.params.id;
  // console.log("params", req.params);
  // console.log("id", id);
  User.findById(id, function(err, user){
    if(err){
      console.log("error:", err);
    } else {
      console.log("user", user);
      arrayPromises = user.myCards.map((card) => {
        return Card.findById(card._id)
      })
      Promise.all(arrayPromises).then((results) => {
        // console.log("this is arrayPromises results", results);
        res.json({cards: results});
      })
    }
  })
})


  // .then((user) => {
  //   console.log("user", user);
  //   arrayPromises = user.myCards.map((cardId) => {
  //     return Card.findById(cardId)
  //   })
  //   Promise.all(arrayPromises).then((results) => {
  //     console.log("this is arrayPromises results", results);
  //     res.json({cards: cards})
    // })
  // })

  // User.findOne({_id: id}, function(err, user){
  //   if(err){
  //     console.log("error getting user.mycards:", err);
  //     res.json({success: false});
  //   } else {
  //     var returnArray = [];
  //     for(var i = 0; i < user.myCards; i++){
  //       if()
  //     }
  //   }
  // })
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
