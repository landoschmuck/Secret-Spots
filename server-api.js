module.exports = function(app) {
  const Spot = require("./models/Spot");

  app.get("/api/spots", (req, res) => {
    Spot.find()
      .then(spots => res.json(spots))
      .catch(err => res.json(err));
  });

  app.post("/api/spots", (req, res) => {
    Spot.create(req.body)
      .then(spots => res.json(spots))
      .catch(err => res.json(err));
  });

  app.patch("/api/spots/:id", (req, res) => {
    const { id } = req.params;
    Spot.findByIdAndUpdate(id, req.body, { new: true })
      .then(spots => res.json(spots))
      .catch(err => res.json(err));
  });
};
