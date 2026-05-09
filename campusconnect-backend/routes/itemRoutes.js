const authMiddleware = require("../middleware/auth.middleware");
const router = require("express").Router();
const Item = require("../models/Item");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });


// CREATE ITEM
/*
router.post("/lost", authMiddleware, async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});
*/
router.post("/lost", upload.single("image"), async (req, res) => {
  const item = new Item({
    ...req.body,
    imageUrl: req.file ? `/uploads/${req.file.filename}` : ""
  });

  await item.save();
  res.json(item);
});

// GET ALL ITEMS OR FILTERED ITEMS
router.get("/", async (req, res) => {
  const { search, category, type } = req.query;

  let query = {};

  if (search) {
    query.title = { $regex: search, $options: "i" }; // case-insensitive
  }

  if (category) {
    query.category = category;
  }

  if (type) {
    query.type = type; // lost / found
  }

  const items = await Item.find(query).sort({ createdAt: -1 });

  res.json(items);
});

// GET ITEMS BY USER ID
router.get("/user/:id", async (req, res) => {
  const items = await Item.find({ userId: req.params.id }).sort({ createdAt: -1 });
  res.json(items);
});

// GET SINGLE ITEM
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;