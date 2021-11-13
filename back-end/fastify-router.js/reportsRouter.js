const reportMethods = require("../controllers/reportsActions");
module.exports = async function (fastify, opts) {
  fastify.post(
    "/api/createReport",
    {
      preValidation: [fastify.jwtauth],
    },
    reportMethods.createReport
  ),
    fastify.get(
      "/api/reports_of_user/:email",
      {
        preValidation: [fastify.jwtauth],
      },
      reportMethods.getUserReport
    ),
    fastify.get(
      "/api/reports_of_company/:orgname",
      {
        preValidation: [fastify.jwtauth],
      },
      reportMethods.getOrganizationReports
    ),
    fastify.put(
      "/api/update_report_status/:reportid",
      {
        preValidation: [fastify.jwtauth],
      },
      reportMethods.updateReportStatus
    );
};
