import User from "../models/UserModel.js";

export const userLogin = async(req, res) => {

    var today = new Date();
    var date = today.getFullYear() + '-' + addZero((today.getMonth() + 1)) + '-' + addZero(today.getDate());
    var time = addZero(today.getHours()) + ':' + addZero(today.getMinutes()) + ':' + addZero(today.getSeconds());
    var now = date + ' ' + time;

    function addZero(val) {
        return String(val).length == 1 ? '0' + val : val
    }

    try {
        const users = await User.find({
            'email': req.body.email
        });

        await User.updateOne({ email: req.body.email }, { $set: { login_at: now } });

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const userLogout = async(req, res) => {

    var today = new Date();
    var date = today.getFullYear() + '-' + addZero((today.getMonth() + 1)) + '-' + addZero(today.getDate());
    var time = addZero(today.getHours()) + ':' + addZero(today.getMinutes()) + ':' + addZero(today.getSeconds());
    var now = date + ' ' + time;

    function addZero(val) {
        return String(val).length == 1 ? '0' + val : val
    }

    try {
        const user = await User.updateOne({ email: req.body.login }, { $set: { logout_at: now } });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const userDaftar = async(req, res) => {
    const user = new User({
        'email': req.body.email,
        'login_at': null,
        'logout_at': null
    });
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}