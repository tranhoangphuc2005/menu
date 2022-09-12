import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
categorySchema.virtual("menu", {
  ref: "Menu",
  foreignField: "category",
  localField: "_id",
});

const CategoryModel = mongoose.model("Category", categorySchema);

export default CategoryModel;
