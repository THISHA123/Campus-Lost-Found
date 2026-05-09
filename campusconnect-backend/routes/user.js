const item = new Item({
  ...req.body,
  userId: req.user.id
});