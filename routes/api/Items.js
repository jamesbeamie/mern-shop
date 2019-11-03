const express = require("express");
const router = express.Router();

//Item model
const Item = require("../../models/Item");

//get all items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => {
      console.log(err);
    });
});

//post an item
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => {
    res.json(item);
  });
});

//delete Item
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ message: "not available" }));
});

module.exports = router;
