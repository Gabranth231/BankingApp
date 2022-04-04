const { response } = require("express");
let express = require("express");
const { Mongoose } = require("mongoose");
let router = express.Router();
let mongoose = require("mongoose");
mongoose.connect("localhost:27017/blog");
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    userName: String,
    balence: String,
    userContacts: String,
    transactions: String,
  }
)
let contact = new Schema(
  {
    userName: String,
    contactName: String,
  }
)

let UserModel = mongoose.model("userInfo",userSchema);
let ContactModel = mongoose.model("contactInfo",contact);
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
});

router.post("/addUser", function (req, res, next) {
  //console.log(req.body)
  var data = new UserModel(req.body)
  data.save()
  res.end()
});

router.post("/addContact", function (req, res, next) {
  //var data = new ContactModel(req.body)
  UserModel.find({userName: "Martin"},null,{sort: { userName: 1 }, limit: 1}).then(function(docs){
    let theDoc = docs[docs.length-1]
    console.log("//addContact: " + theDoc)
    res.status(200).json(theDoc)
  })
});
router.post("/getUser", function (req, res, next) {
  UserModel.find().then(function (docs) {
    let theDoc = docs[docs.length-1]
     console.log("//getUser: " + theDoc)
     //theDoc = JSON.stringify(theDoc)
    res.status(200).json(theDoc)
  });
});

module.exports = router;
