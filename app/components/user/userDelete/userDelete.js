const db = require('../../../../config/sequelize');
let User = require('../../../../config/models/user');

User = User(db.sequelize, db.Sequelize);

const deleteUser = async (user_id) => {
    const deleteRow = await User.destroy({where: {user_id}});
    return deleteRow;
};

module.exports = {deleteUser};