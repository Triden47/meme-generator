import express from "express";
import Counter from "../models/counter.js";
import Image from "../models/image.js";
import bodyParser from "body-parser";
const route = express.Router();

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

route.post("/api/images", jsonParser, async (req, res) => {
  console.log(req.body);
  try {
    const id = "61f91233ecd214bef37c623b";
    const counter = (await Counter.findById(id, "__v")).toObject();

    var increase = counter.__v;

    const newImage = new Image({
      number: increase,
      public_id: req.body.public_id,
    });
    await newImage.save();

    await Counter.findByIdAndUpdate(id, { __v: increase + 1 });

    res.status(200).json("Image data saved successfully");

  } catch (error) {
    res.status(500).json(error);
  }
});

route.get("/images", async (req, res) => {
  try {
    const id = "61f91233ecd214bef37c623b";
    const counter = (await Counter.findById(id, "__v")).toObject();

    const random = Math.floor(Math.random() * counter.__v);
    console.log(random);
    const imageData = await Image.findOne({ number: random });

    console.log(imageData);
    res.send({ imageData });
    // res.json(JSON.stringify(exist));

    // const readStream = fs.createReadStream(`images/${imageName}`);
    // readStream.pipe(res);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default route;
