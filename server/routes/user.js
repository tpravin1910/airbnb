const express = require('express');
const router = express.Router();
const multer = require('multer');
//const upload = multer({dest:/'temp' });
const {
    register,
    login,
    logout,
    googleLogin,
    uploadPicture,
    updatesUserDetails,
} = require('../controllers/userController');

router.router('/register').post(register)
router.router('/login').post(login)
router.router('/google/auth').post(google/auth)
router.router('/update-picture').post(uploadPicture.single('picture',1), uploadPicture)
router.router('/update-user').put(updateUserDetails)
router.router('/logout').get(logout);

module.exports = router