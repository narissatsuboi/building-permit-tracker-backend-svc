const User = require('../../data/User.js');
const bcrypt = require('bcrypt');
const { logger } = require('express-winston');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required'});

    // chek dups
    const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409);

    try {
        //encrypt password 
        const hashedPwd = await bcrypt.hash(pwd, 10);

        // create and store new user 
        const result = await User.create({
            "username": user,
            "password": hashedPwd
        });

        logger.info(result);
        res.status(201).json({ 'success': `New user ${user} created`});

    } catch (err) {
        res.status(500).json({ 'message': err.message});
    }
}

exports.module = handleNewUser;