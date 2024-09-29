const Asynchandler = require("express-async-handler");
const carModal = require("../models/carModal");

const addcars = Asynchandler(async (req, res) => {
  const user_id = req.user.id;

  const {
    Name,
    image,
    model,
    brand,
    registered,
    mileage,
    fuelaverage,
    color,
    price,
    cc,
    description,
  } = req.body;

  if (
    !Name ||
    !image ||
    !model ||
    !brand ||
    !registered ||
    !mileage ||
    !fuelaverage ||
    !color ||
    !price ||
    !cc ||
    !description
  ) {
    return res.status(400).json({ error: "PLEASE ENTER ALL THE FIELDS" });
  }

  s;
  const numericModel = Number(model);
  const numericFuelAverage = Number(fuelaverage);

  if (isNaN(numericModel) || isNaN(numericFuelAverage)) {
    return res
      .status(400)
      .json({ error: "Model and fuel average must be valid numbers." });
  }

  try {
    const createdData = await carModal.create({
      user: user_id,
      name: Name,
      image,
      model: numericModel,
      brand: brand,
      registered: register,
      mileage: mileage,
      fuelaverage: numericFuelAverage,
      color: color,
      price: price,
      cc: cc,
      description: description,
    });

    return res.status(201).json({
      message: "Car added successfully",
      data: createdData,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to add the car. Please try again.",
      details: error.message,
    });
  }
});

module.exports = {
  addcars,
};
