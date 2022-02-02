import express from "express";
import Counter from "../models/counter.js";
import Image from "../models/image.js";
import bodyParser from "body-parser";
import Jimp from "jimp";
import { v2 as cloudinary } from "cloudinary";
const route = express.Router();

var jsonParser = bodyParser.json();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

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

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

route.post("/api/generate", jsonParser, async (req, res) => {
  console.log(req.body);
  const obj = req.body;
  try {
    Jimp.read(
      `https://res.cloudinary.com/triden47/image/upload/w_400,c_scale/${obj.path}`
    )
      .then((image) => {
        // console.log("yes");
        // image.resize(500, 500); // resize
        Jimp.loadFont(
          obj.color === "WHITE"
            ? Jimp.FONT_SANS_32_WHITE
            : Jimp.FONT_SANS_32_BLACK
        ).then((font) => {
          image.print(
            font,
            0,
            0,
            {
              text: obj.topText,
              alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
              alignmentY: Jimp.VERTICAL_ALIGN_TOP,
            },
            image.bitmap.width,
            image.bitmap.height
          );

          image.print(
            font,
            0,
            0,
            {
              text: obj.bottomText,
              alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
              alignmentY: Jimp.VERTICAL_ALIGN_BOTTOM,
            },
            image.bitmap.width,
            image.bitmap.height
          );
          image.write("images/result3.png", () => {
            cloudinary.uploader.upload(
              "images/result3.png",
              (error, result) => {
                console.log(result);
                console.log(error);
                res.status(200).json({ result });
              }
            );
          });
        });
      })
      .catch((err) => {
        console.log("Image not available");
      });
  } catch (error) {
    console.log("Error");
    res.status(500).json(error);
  }
});

export default route;
