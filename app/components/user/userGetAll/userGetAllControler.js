const httpStatus = require('http-status');
const User = require('./userGetAll');

const getUsers = async(req,res) => {
    try {
        const users = await User.getUsers();
        return res
            .status(httpStatus.OK)
            .send(users);
    } catch (error) {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({message: 'No se pudo obtener la información'});
    }
};

module.exports = {getUsers};