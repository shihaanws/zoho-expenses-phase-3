const advancesModule = require("../controllers/advances");
module.exports = async function (fastify, opts) {
  //get advances of user
  fastify.get(
    "/api/advancesofuser/:email",
    {
      preValidation: [fastify.jwtauth],
    },
    advancesModule.getAdvancesForUser
  ),
    //create new advances
    fastify.post(
      "/api/createadvances",
      {
        preValidation: [fastify.jwtauth],
      },
      advancesModule.addAdvances
    );
};
