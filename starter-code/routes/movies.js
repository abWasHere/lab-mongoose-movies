const express = require("express");
const router = express.Router();
const movieModel = require("./../models/Movie");

// HOME ROUTE
router.get("/", (req, res, next) => {
   movieModel
      .find()
      .then((movies) => res.render("movies/index", { movies }))
      .catch(next);
});

// NEW MOVIE ROUTE
router.get("/new", (req, res, next) => {
   res.render("movies/new");
});

router.post("/new", (req, res, next) => {
   const { title, genre, plot } = req.body;
   movieModel
      .create(req.body)
      .then(() => res.redirect("/movies"))
      .catch(() => res.redirect("/"));
});

// MOVIE DETAILS ROUTE
router.get("/:id", (req, res, next) => {
   movieModel
      .findById(req.params.id)
      .then((oneMovie) => res.render("movies/show", oneMovie))
      .catch(next);
});

// MODIFY MOVIE DETAILS ROUTE
router.get("/:id/edit", (req, res, next) => {
   movieModel
      .findById(req.params.id)
      .then((movie) => res.render("movies/edit", movie))
      .catch(next);
});

router.post("/:id/edit", (req, res, next) => {
   // const { name, occupation, catchPhrase } = req.body;
   movieModel
      .findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect(`/movies/${req.params.id}`))
      .catch(next);
});

// DELETE MOVIE ROUTE
router.post("/:id/delete", (req, res, next) => {
   movieModel
      .findByIdAndRemove(req.params.id)
      .then(() => res.redirect("/movies"))
      .catch(next);
});

// ------------
module.exports = router;
