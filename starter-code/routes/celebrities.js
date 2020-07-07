const express = require('express');
const router = express.Router();
const celebrityModel = require('./../models/Celebrity');

// HOME ROUTE
router.get('/', (req, res, next) => {
   celebrityModel
      .find()
      .then((celebrities) => res.render('celebrities/index', { celebrities }))
      .catch(next);
});

// NEW CELEB ROUTE
router.get('/new', (req, res, next) => {
   res.render('celebrities/new');
});

router.post('/new', (req, res, next) => {
   const { name, occupation, catchPhrase } = req.body;
   celebrityModel
      .create(req.body)
      .then(() => res.redirect('/celebrities'))
      .catch(() => res.redirect('/'));
});

// CELEB DETAILS ROUTE
router.get('/:id', (req, res, next) => {
   celebrityModel
      .findById(req.params.id)
      .then((oneCelebrity) => res.render('celebrities/show', oneCelebrity))
      .catch(next);
});

// MODIFY CELEB DETAILS ROUTE
router.get('/:id/edit', (req, res, next) => {
   celebrityModel
      .findById(req.params.id)
      .then((celebrity) => res.render('celebrities/edit', celebrity))
      .catch(next);
});

router.post('/:id/edit', (req, res, next) => {
   // const { name, occupation, catchPhrase } = req.body;
   celebrityModel
      .findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect(`/celebrities/${req.params.id}`))
      .catch(next);
});

// DELETE CELEB ROUTE
router.post('/:id/delete', (req, res, next) => {
   celebrityModel
      .findByIdAndRemove(req.params.id)
      .then(() => res.redirect('/celebrities'))
      .catch(next);
});

// ------------
module.exports = router;
