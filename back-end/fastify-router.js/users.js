const usermodule = require("../controllers/users");
module.exports = async function (fastify, opts) {
  fastify.get(
    "/api/getallusers/:orgname",
    {
      preValidation: [fastify.jwtauth],
    },
    usermodule.getAllUser
  ),
    fastify.get(
      "/api/getuser/:id",
      {
        preValidation: [fastify.jwtauth],
      },
      usermodule.getUserById
    ),
    fastify.put(
      "/api/updateuser/:id",
      {
        preValidation: [fastify.jwtauth],
      },
      usermodule.updateUserById
    );
};
