const mongoose = require("mongoose");

const BrowseData = new mongoose.Schema({
  //browser backend
  companynameE2: {
    type: String,
    required: true,
  },
  contactnumberE2: {
    type: String,
    required: true,
  },

  emailE2: {
    type: String,
    required: true,
  },
  descriptionE2: {
    type: String,
    required: true,
  },
  stateE2: {
    type: String,
    required: true,
  },
  countryE2: {
    type: String,
    required: true,
  },

  experienceE2: {
    type: String,
    required: true,
  },

  salaryE2: {
    type: String,
    required: true,
  },
  roleE2: {
    type: String,
    required: true,
  },

  no_of_applicationsE2: {
    type: String,
    required: true,
  },
  ImageE2: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("BrowseData.data", BrowseData);
