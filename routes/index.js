const express = require("express");
const router = express.Router();
const multer = require("multer")
const upload = multer({ dest: 'date/'})
ul
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});


/**POST register form */
router.post("/register" , upload.single('avatar'), (req,res)=>{
  console.log(req.file)
  res.json({message: `received ${req.file}`})
})
module.exports = router;
