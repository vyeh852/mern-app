const User = require('../models/User');

const register = async(req, res, next) => {
    const {username, email, password} = req.body;
    try {
        const user = await User.create({
            username, 
            email, 
            password,
        })

        sendToken(user, 201, res)
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }
}

const login = async(req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password){
        res.status(400).json({ 
            success:false,
            error:"provide email and password!" })
    }
    try {
        const user = await User.findOne({ email }).select("+password")

        if(!user){
            res.status(404).json({
                success:false,
                error:"invalid!"
            })
        }
        
        const isMatch = await user.matchPasswords(password);
        if(!isMatch){
            res.status(404).json({
                success:false, error:"invalid!"
            })
        }
        
        sendToken(user, 200, res)
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }
}

const forgotPassword = (req, res, next) => {
    res.send("forgot password");
}

const resetPassword = (req, res, next) => {
    res.send("reset password");
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignToken();
    res.status(statusCode).json({ success:true, token })
}

module.exports = {
    register,
    login,
    forgotPassword,
    resetPassword
}