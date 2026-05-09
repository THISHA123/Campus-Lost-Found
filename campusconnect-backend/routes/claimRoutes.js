const authMiddleware = require("../middleware/auth.middleware");
const router = require("express").Router();
const Claim = require("../models/Claim");

// CREATE CLAIM
router.post("/", authMiddleware, async (req, res) => {
  const claim = new Claim(req.body);
  await claim.save();
  res.json(claim);
});

// GET CLAIMS FOR ITEM
router.get("/:itemId", async (req, res) => {
  const claims = await Claim.find({ itemId: req.params.itemId });
  res.json(claims);

});

router.put("/:id", async (req, res) => {
  const { status } = req.body;

  const updated = await Claim.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  res.json(updated);
});


/*
router.put("/:id", async (req, res) => {
  const claim = await Claim.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(claim);
});



router.post("/", async (req, res) => {
  const claim = new Claim(req.body);
  await claim.save();
  res.json(claim);
});

*/
module.exports = router;