const User = require('../../data/User.js');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { username, firstname, lastname, password } = req.body;
    if (!username || !firstname || !lastname || !password) return res.status(400).json({ 'message': 'all fields required'});

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: username }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);

        //create and store the new user
        const result = await User.create({
            "username": username,
            "firstname": firstname,
            "lastname": lastname,
            "password": hashedPwd
        });


        res.status(201).json({ 'success': `New user ${username} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };