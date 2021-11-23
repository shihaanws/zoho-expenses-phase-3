const Advances = require("../models/advances");
const boom = require("boom");


exports.addAdvances = async (req, res) => {
    try {
      const advance = new Advances(req.body);
      return advance.save();
    } catch (err) {
      throw boom.boomify(err);
    }
  };

exports.getAdvancesForUser = async function (req, reply) {
  try {
    const res = await Advances.find({ email: req.params.email });
    return reply.send(res);
  } catch (er) {
    console.log(er);
    throw boom.boomify(er);
  }//getallusers
};

