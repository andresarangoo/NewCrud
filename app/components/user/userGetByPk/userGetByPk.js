const db = require('../../../../config/sequelize');
let User = require('../../../../config/models/user');

User = User(db.sequelize, db.Sequelize);

const getUserById = async(id) => {
    const user = await User.findByPk(id);
    if(!user) return null;
    const userFormatted = {
            userName: user.user_name,
            userEmail: user.user_email,
            userAddress: user.user_address,
            userPhoto: user.user_photo,
            userMoney: user.user_money
        };
    return userFormatted;
};

module.exports = {getUserById};