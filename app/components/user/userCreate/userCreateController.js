const httpStatus = require('http-status');
const User = require('./userCreate');

const createUser = async(req,res) => {
    const {userName, userEmail, userAddress, userPhoto, userMoney} = req.body;
    if(!userName || !userEmail || !userAddress || !userPhoto || !userMoney){
        return res
            .status(httpStatus.BAD_REQUEST)
            .send({message: 'Información incompleta'})
    }
    try {
        const user = await User.createUser(req.body);
        return res
            .status(httpStatus.CREATED)
            .send(user);
    } catch (error) {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({message: 'No se pudo crear el usuario'});
    }
};

module.exports = {createUser};