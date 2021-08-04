const httpStatus = require('http-status');
const User = require('./userGetByPk');

const getUserById = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.getUserById(id);
        if(!user){
            return res
                .status(httpStatus.NOT_FOUND)
                .send({ message: 'No se encontro el usuario' });
        }else{
            return res
            .status(httpStatus.OK)
            .send(user);
        }
    } catch (error) {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({message: 'Ocurrio un error'});
    }
};

module.exports = {getUserById};