const Reports = require("../models/reportsModel");
const Expense = require("../models/expenses");

const functions = {
  createReport: async (req, res) => {
    const currentExpense = await Expense.findOne({ _id: req.body.expenseId });
    if (currentExpense) {
      var newReport = new Reports({
        email: req.body.email,
        org_name: currentExpense.org_name,
        report_name: req.body.reportName,
        business_purpose: req.body.businessPurpose,
        from_date: req.body.fromDate,
        to_date: req.body.toDate,
        expense_id: req.body.expenseId,
        amount: currentExpense.amount,
      });
      try {
        const savedReport = await newReport.save();
        console.log(savedReport);
        return res.send(savedReport);
      } catch (err) {
        console.log(err);
        res.code(408);
        return res.send({ msg: "Something went wrong ! \n" + err });
      }
    }
  },
  getUserReport: async (req, res) => {
    try {
      const reports = await Reports.find({ email: req.params.email });
      console.log(reports);
      return res.send(reports);
    } catch (err) {
      console.log(err);
      res.code(408);
      return res.send({ msg: "Something went wrong !\n" + err });
    }
  },
  getOrganizationReports: async (req, res) => {
    try {
      const reports = await Reports.find({ org_name: req.params.orgname });
      console.log(reports);
      return res.send(reports);
    } catch (er) {
      console.log(err);
      res.code(408);
      res.send({ msg: "Something went wrong !\n" + err });
    }
  },
  updateReportStatus: async (req, res) => {
    try {
      const report = await Reports.findOneAndUpdate(
        { _id: req.params.reportid },
        { status: req.body.status }
      );
      console.log(report);
      return res.send(report);
    } catch (err) {
      console.log(err);
      res.code(408);
      res.send({ msg: "Something went wrong !\n" + err });
    }
  },
};
module.exports = functions;
