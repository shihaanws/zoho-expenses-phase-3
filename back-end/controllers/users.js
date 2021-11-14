const User = require("../models/user");
const boom = require("boom");

exports.getAllUser = async function (req, reply) {
  try {
    const res = await User.find({ org_name: req.params.orgname });
    return reply.send(res);
  } catch (er) {
    console.log(er);
    throw boom.boomify(er);
  }//getallusers
};

exports.getUserById = async function (req, reply) {
  try {
    const res = await User.findOne({ _id: req.params.userid });
    return reply.send(res);
  } catch (er) {
    console.log(er);
    throw boom.boomify(er);
  }//getuserbyid
};

exports.updateUserById = async function (req, reply) {
    try {
      const id = req.params.id;
      const user = req.body;
      const { ...updateData } = user;
      const update = await User.findByIdAndUpdate(id, updateData, {
        new: true,
      });
      return update;
    } catch (er) {
      console.log(er);
      throw boom.boomify(er);
    }//updateuser
  };
