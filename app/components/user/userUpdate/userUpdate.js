const db = require('../../../../config/sequelize');
let User = require('../../../../config/models/user');

User = User(db.sequelize, db.Sequelize);

const updateUser = async(user_id, body) => {
    const {userName, userEmail, userAddress, userPhoto, userMoney} = body;
    const newDataUser = {
        user_name: userName,
        user_email: userEmail,        
        user_address: userAddress,
        user_photo: userPhoto,
        user_money: userMoney
    }
    const [updatedRow] = await User.update({...newDataUser}, {where: {user_id}});
    return updatedRow;
};

module.exports = {updateUser};