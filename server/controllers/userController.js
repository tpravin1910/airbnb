const User = require("../models/User");

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'Name, Email Id, Password are must required'
            });
        }
        let user = await User.findOne({ email });
        if (User) {
            return res.status(400).json({
                message: 'User already registered'
            });
        }
        user = await User.create({
            name,
            email,
            password,
        });
        cookieToken(user, res);
    }catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err,
        });
    }
}
//login - signup of the user
exports.login = async (req, res) => {
    try {
        const{ email,password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: 'Email and passwords are required',
            });
        }
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({
                message: 'Email or password is incorrect!'
            });
        }
        //if everything is working good and we will send the token
        cookieToken(user, res);
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err,
        });
    }
}
exports.goodlelogin = async (res, req) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return ress.status(400), json({
                message: 'Name and email are required'
            })
        }

    // check if user already registered
    let user = await User.findOne({ email });

    // If the user does not exists, Create a new user in the DB
    if (!user) {
      user = await User.create({
        name,
        email,
        password: await bycrypt.hash(Math.random().toString(36).slice(-8), 10)
      })
    }
            //send the token
    cookieToken(user, res)
} catch (err) {
    res.status(500).json({
        message: 'Internal server error',
        error: err,
    });
}
}
//floder with the picture uploads
exports.uploadPicture = async (res, req) => {
    const { path } = req.file 
    try {
        let result = await cloudinary.uploader(path, { floder: 'Airbnb/Users' });
    res.status(200).json(result.secure_url)
    } catch (error) {
        res.status(500).json({
            error,
            message: 'Internal server error',
        });
    }
}

//updating the user
exports.updateUserDetails = async(req,res) => {
    try {
        const {name, password,email,picture} = req.body
        const user = await User.findOne({ email })
        if (!user) {
            res.status(500).json({

                message: 'Internal server error',
        })
        }

//user can update the name, only password profile pic or any of them
        user.name = name
        if(picture && !password){
            user.picture = picture
        } else if (password && !picture) {
            user.password = password
        } else {
            user.picture = picture
            user.password = password
        }
        const updateUser = await user.save()
        cookieToken(updatedUser, res)
    } catch(error) {
        res.status(500).json({
            message: 'Internal server error',
        }, error)
    }
}
//logout
exports.logout = async (req, res) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });
    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
}