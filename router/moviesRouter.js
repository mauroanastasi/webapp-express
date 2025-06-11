const express = require(`express`);

const router = express.Router();

const moviesController = require(`../controllers/moviesController`)

router.get(`/`, moviesController.index);

router.get(`/:id`, moviesController.show);

const upload = require(`../middlewares/multer`)

router.post(`/id/review`, moviesController.storeReview)

module.exports = router;
