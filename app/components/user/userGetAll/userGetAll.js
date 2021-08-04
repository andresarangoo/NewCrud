const db = require('../../../../config/sequelize');
let User = require('../../../../config/models/user');

User = User(db.sequelize, db.Sequelize);

const getUsers = async() => {
    const users = await User.findAll();
    const usersFormatted = users.map (user => {
        return {
            userName: user.user_name,
            userEmail: user.user_email,
            userAddress: user.user_address,
            userPhoto: user.user_photo,
            userMoney: user.user_money
        }
    });
    return usersFormatted;
};

module.exports = {getUsers};