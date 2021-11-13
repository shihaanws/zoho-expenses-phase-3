var mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    org_name: {
      type: String,
      required: true,
      default: "not mentioned",
    },
    report_name: {
      type: String,
      min: 3,
      max: 255,
      required: true,
    },
    business_purpose: {
      type: String,
      min: 3,
      max: 255,
      required: true,
    },
    from_date: {
      type: Date,
      required: true,
    },
    to_date: {
      type: Date,
      required: true,
    },
    expense_id: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    // array type
    status: {
      type: String,
      default: "pending",
      enum: ["approved", "removed", "pending"],
    },
    approver: {
      type: String,
      default: "Admin",
    },
  },
  { timestamps: true, collection: "reports" }
);
module.exports = mongoose.model("Reports", reportSchema);
