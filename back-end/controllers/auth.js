const User = require("../models/user");
const boom = require("boom");
exports.signup = async (req, reply) => {
  const cust = new User({
    name: req.body.name,
    org_name: req.body.orgname,
    email: req.body.email,
    password: req.body.password,
    country: req.body.country,
    state: req.body.state,
    Phone: req.body.phone,
  });
  // console.log(req.body)
  console.log(cust);
  try {
    console.log("initiating save command -------------------------");
    const savedUser = await cust.save();
    console.log(savedUser);
    console.log("saved dacoments-------------------------------");
    return reply.send({
      org_name: savedUser.org_name,
      email: savedUser.email,
      id: savedUser._id,
      name: savedUser.name,
    });
  } catch (err) {
    console.log(err, "-------------------------error");
    // throw boom.boomify(err)
    return reply.status(400).send({ error: "email already exists" });
  }
};
