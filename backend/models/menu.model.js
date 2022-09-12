import mongoose from "mongoose";

const Schema = mongoose.Schema;

const menuSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String },
    img: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

const MenuModel = mongoose.model("Menu", menuSchema);

export default MenuModel;
