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
    userContactsIDs: [mongoose.SchemaType.ObjectId],
    transactionsIDs: [mongoose.SchemaType.ObjectId],
  }
)
let UserModel = mongoose.model("userInfo",userSchema);
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
});

router.post("/addUser", function (req, res, next) {
  console.log(req.body)
  var data = new UserModel(req.body)
  data.save()
  res.end()
});

router.post("/getUser", function (req, res, next) {
  UserModel.find({userName: "Martin"}).then(function (docs) {
    let theDoc = docs[docs.length-1]
     console.log("//getUser: " + theDoc)
     // theDoc = JSON.stringify(theDoc)
    res.status(200).json(theDoc)
  });
});

module.exports = router;
