const httpStatus = require('http-status');
const User = require('./userDelete');

const deleteUser = async(req,res) => {
    const {id} = req.params;
    try {
        const userWasDelete = await User.deleteUser(id);
        if (userWasDelete){
            return res
                .status(httpStatus.OK)
                .send({message: 'Se elimino el registro'});
        } else{
            return res
                .status(httpStatus.OK)
                .send({message: 'El usuario buscado no existe'});
        }
    } catch (error) {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({message: 'Ocurrio un error'});
    }
};

module.exports = {deleteUser};