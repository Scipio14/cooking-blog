require("../models/database");
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

/**
 * Get /categories
 * Categories
 */

exports.homepage = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    // console.log(categories);
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);
    const thai = await Recipe.find({ category: "Thai" }).limit(limitNumber);
    const american = await Recipe.find({ category: "American" }).limit(
      limitNumber
    );
    const chinese = await Recipe.find({ category: "Chinese" }).limit(
      limitNumber
    );

    const food = { latest, thai, american, chinese };
    //console.log(latest);
    res.render("index", { title: "Cookig Blog - Homepage", categories, food });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);

    res.render("categories", {
      title: "Cooking Blog - Categories",
      categories,
    });
  } catch (err) {
    res.status(500).send({ message: err.message } || "Server Error");
  }
};

/**
 *
 * GET /recipe/:id
 * Recipe
 */
exports.exploreRecipe = async (req, res) => {
  try {
    let recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    res.render("recipe", { title: "Cooking Blog - Recipe", recipe });
  } catch (err) {
    res.status(500).send({ message: err.message } || "Server Error");
  }
};
