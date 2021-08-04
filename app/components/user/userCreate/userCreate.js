const db = require('../../../../config/sequelize');
let User = require('../../../../config/models/user');

User = User(db.sequelize, db.Sequelize);

const createUser = async(body) => {
    const {userName, userEmail, userAddress, userPhoto, userMoney} = body;
    const newUser = await User.create({
        user_name: userName,
        user_email: userEmail,        
        user_address: userAddress,
        user_photo: userPhoto,
        user_money: userMoney
    });
    const userFormatted = {
        userName: newUser.user_name,
        userEmail: newUser.user_email,
        userAddress: newUser.user_address,
        userPhoto: newUser.user_photo,
        userMoney: newUser.user_money
    };
    return userFormatted;
};

module.exports = {createUser};