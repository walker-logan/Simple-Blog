const express = require("express");
const router = express.Router();

// routes

// home page
router.get("", (req, res) => {
  const locals = {
    title: "NodeJs Blog",
    description: "Simple blog made with NodeJs, Express, and MongoDb.",
  };

  res.render("index", { locals });
});

// about page
router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
