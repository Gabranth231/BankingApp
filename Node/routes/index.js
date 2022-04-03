let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
mongoose.connect("localhost:27017/blog");
let Schema = mongoose.Schema;

let blogSchema = new Schema(
  {
    noEmployees: String
  },
  { collection: "employees" } 
);
let EmployeeModel = mongoose.model("employeeInfo", blogSchema);

let userSchema = new Schema(
  {
    userName: String,
    balence: String,
    userContactsIDs: Array,
    transactionsIDs: Array,
  }
)
let UserModel = mongoose.model("userInfo",userSchema);
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
});

router.post("/setNoEmployees", function (req, res, next) {
  console.log(req.body)
  var data = new EmployeeModel(req.body)
  data.save()
  res.end()
});
router.post("/addUser", function (req, res, next) {
  console.log(req.body)
  var data = new UserModel(req.body)
  data.save()
  res.end()
});

router.post("/getNoEmployees", function (req, res, next) {
  EmployeeModel.find().then(function (docs) {
    let theDoc = docs[docs.length-1]
     console.log("/getNoEmployees: " + theDoc)
     // theDoc = JSON.stringify(theDoc)
    res.status(200).json(theDoc)
  });
});
router.post("/getUser", function (req, res, next) {
  EmployeeModel.find().then(function (docs) {
    let theDoc = docs[docs.length-1]
     console.log("/getNoEmployees: " + theDoc)
     // theDoc = JSON.stringify(theDoc)
    res.status(200).json(theDoc)
  });
});

module.exports = router;
