const validate = (req, res, next) => {
  const { name, image, description, platforms, released, rating, genre } =
    req.body;

  if (!name) return res.status(400).json({ error: "missing name" });
  if (!image) return res.status(400).json({ error: "missing image" });
  if (!description)
    return res.status(400).json({ error: "missing description" });
  if (!platforms) return res.status(400).json({ error: "missing platforms" });
  if (!released)
    return res.status(400).json({ error: "missing released date" });
  if (!rating) return res.status(400).json({ error: "missing rating" });
  if (!genre) return res.status(400).json({ error: "missing genre" });

  next();
};

export default validate;
