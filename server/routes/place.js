const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/user');

const {
    addPlace,
    getPlaces,
    updatePlace,
    singlePlace,
    userPlaces,
    seaechPlaces
} = require('../controllers/placeController');

router.route('/').get(getPlaces);

// Protected routes (user must be logged in)
router.route('/add-places').post(isLoggedIn, addPlace);
router.route('/user-places').get(isLoggedIn, userPlaces);
router.route('/update-place').put(isLoggedIn, updatePlace);

// Not protected routed but sequence should be interferd with above router
router.route('/:id').get(singlePlace);
router.route('/search/:key').get(searchPlaces);


module.exports = router;