const httpStatus = require('http-status');
const User = require('./userUpdate');

const updateUser = async(req,res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const userWasUpdate = await User.updateUser(id, body);
        if (userWasUpdate){
            return res
                .status(httpStatus.OK)
                .send({message: 'Se actualizo'});
        } else{
            return res
                .status(httpStatus.OK)
                .send({message: 'No se actualizo nada, la información sigue igual'});
        }
    } catch (error) {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({message: 'Ocurrio un error'});
    }
};

module.exports = {updateUser};