import MenuModel from "../models/menu.model";

export const getAllMenu = async (req, res) => {
  try {
    const menus = await MenuModel.find().populate("category");
    res.status(200).json(menus);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const postMenu = async (req, res) => {
  const { name, price, description, img, category } = req.body;

  try {
    const menu = await MenuModel.create({
      name,
      price,
      description,
      img,
      category,
    });
    res.status(200).json(menu);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getOneMenu = () => {};

export const updateMenu = () => {};

export const deleteMenu = () => {};
