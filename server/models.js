var mongoose = require('mongoose');
var connect = process.env.MONGODB_URI;
// var findOrCreate = require('mongoose-find-or-create');

mongoose.connect(connect);

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String,
    age: Number,
    location: String,
    gender: String,
    myCards: Array,
    viewedCards: Array,
    pendingCards: Array
});

var cardSchema = new Schema({
    author: {   //populate userData relevent to card
        ref: User,
        type: Schema.Types.ObjectId,
    },
    imageA: String,
    imageB: String,
    votesA: Number,
    votesB: Number,
    voters: Array
});

// userSchema.plugin(findOrCreate);

var User = mongoose.model('User', userSchema);
var Card = mongoose.model('Card', cardSchema);

module.exports = {
  User: User,
  Card: Card
};
