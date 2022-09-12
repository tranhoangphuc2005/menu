import Category from "../models/category.model";

export const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const category = await Category.create({ name });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getOneCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate("menu");
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
