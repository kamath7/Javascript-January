const router = require("express").Router();
const Strotra = require("../model/strotra");

router.get("/", async (req, res) => {
  try {
    const strotras = await Strotra.find();
    res.status(200).json(strotras);
  } catch (error) {
    res.status(500).send({ message: "Error", errorOccured: error.message });
  }
});

router.post("/", async (req, res) => {
  const strotra = new Strotra({
    name: req.body.name,
    dedicatedToGod: req.body.dedicatedToGod,
    theStrotra: req.body.theStrotra,
  });
  try {
    const newStotra = await strotra.save();
    res
      .status(201)
      .send({ message: "Added Successfully!", strotra: newStotra });
  } catch (error) {
    res.status(500).send({ message: "Error", errorOccured: error.message });
  }
});

router.patch("/:id", getStrotra, async (req, res) => {
  if (req.body.name !== null) {
    res.strotra.name = req.body.name;
  }
  if (req.body.dedicatedToGod !== null) {
    res.strotra.dedicatedToGod = req.body.dedicatedToGod;
  }
  if (req.body.theStrotra !== null) {
    res.strotra.theStrotra = req.body.theStrotra;
  }
  try {
    const updatedStrotra = await res.strotra.save();
    res.status(201).json(updatedStrotra);
  } catch (error) {
    res.status(400).json({ message: e.message });
  }
});

router.delete("/:id", getStrotra, async (req, res) => {
  try {
    await res.strotra.remove();
    res.status(200).json({ message: "Strotra deleted!" });
  } catch (error) {
    res.status(500).json({
      message: e.message,
    });
  }
});

async function getStrotra(req, res, next) {
  let strotra;

  try {
    strotra = await Strotra.findById(req.params.id);

    if (strotra === null) {
      return res.status(404).json({ message: "No such strotra available" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.strotra = strotra;
  next();
}

module.exports = router;
