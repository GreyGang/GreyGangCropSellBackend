const mongoose = require("mongoose");
const User = mongoose.model("User");
const Item = mongoose.model("Item");

const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const uniqueString = require("unique-string");

module.exports.GET_ITEM = async (req, res) => {
  Item.find()
    .sort({ register_date: -1 })
    .then((items) => res.json(items))
    .catch((err) => res.send(err));
};
module.exports.POST_ITEM = (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    const { title, price, quantity, type, about } = fields;
    let data = {
      title,
      price,
      quantity,
      type,
      about,
      seller: req.user.id,
    };
    if (!title || !quantity || !price || !type || !about || !files.photo) {
      return res.send({ error: "Fill the form" });
    }
    let ext = path.extname(files.photo.name).split("."); // files contain image data
    ext = ext[1];
    let new_file_name = uniqueString() + "." + ext;
    data.img_url = process.env.BASE_URL + "uploads/" + new_file_name;
    var newPath =
      path.join(__dirname, "../public/uploads") + "/" + new_file_name;
    var rawData = fs.readFileSync(files.photo.path);
    console.log(data);
    fs.writeFile(newPath, rawData, function (err) {
      if (err) console.log("err");
      else console.log("Done");
    });
    const newItem = new Item(data);
    newItem
      .save()
      .then((response) => {
        return res.send({ success: response });
      })
      .catch((err) => {
        return res.send({ error: err });
      });
  });
};
module.exports.UPDATE_ITEM = (req, res) => {};
module.exports.DELETE_ITEM = (req, res) => {};
