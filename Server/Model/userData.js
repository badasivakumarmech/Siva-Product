const mongoose = require("mongoose");

const userData = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  radioSection: {
    type: String,
    enum: ["Fresher", "Experienced"],
    require: true,
  },
  State: {
    type: String,
    require: true,
  },
  Currentlocation: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },

  emailE1: {
    type: String,
    require: true,
  },
  //resumeheading
  resumeheading: {
    type: String,
    require: true,
  },
  //profileSummary
  profileSummary: {
    type: String,
    require: true,
  },
  //Skills Details
  KeySkills: {
    type: String,
    require: true,
  },
  //Employee Details
  TotalExperience: {
    type: String,
    require: true,
  },
  CurrentCTC: {
    type: String,
    require: true,
  },
  YourDesignation: {
    type: String,
    require: true,
  },
  YourOrganizationCategory: {
    type: String,
    require: true,
  },
  Type: {
    type: String,
    enum: ["yes", "no"],
    require: true,
  },
  StartedWorkingFrom: {
    type: String,
    require: true,
  },
  WorkedTill: {
    type: String,
    require: true,
  },
  Describe: {
    type: String,
    require: true,
  },
  //Education Details
  Degree: {
    type: String,
    require: true,
  },

  University: {
    type: String,
    require: true,
  },

  Year: {
    type: String,
    require: true,
  },
  //Project Details
  ProjectTitle: {
    type: String,
    require: true,
  },
  Description: {
    type: String,
    require: true,
  },
  GitHubLink: {
    type: String,
    require: true,
  },
  //Accomplishment
  //WorkSample
  WorkSample: {
    type: String,
    require: true,
  },
  //Research
  ResearchTitle: {
    type: String,
    require: true,
  },
  Authors: {
    type: String,
    require: true,
  },
  PublicationDate: {
    type: String,
    require: true,
  },
  //Presentation
  PresentationTittle: {
    type: String,
    require: true,
  },
  Speaker: {
    type: String,
    require: true,
  },
  PresentationDate: {
    type: String,
    require: true,
  },
  //Patent
  Patent: {
    type: String,
    require: true,
  },
  //Certification
  CertificationName: {
    type: String,
    require: true,
  },
  Organization: {
    type: String,
    require: true,
  },
  Date: {
    type: String,
    require: true,
  },
  //Desired career Profile
  DesireIndustry: {
    type: String,
    require: true,
  },
  Preferedlocation: {
    type: String,
    require: true,
  },
  designation1: {
    type: String,
    require: true,
  },
  Expectedctcsalary: {
    type: String,
    require: true,
  },
  Desiredshift: {
    type: String,
    require: true,
  },
  Employmenttype: {
    type: String,
    require: true,
  },
  //Personal Details
  DateOfBirth: {
    type: String,
    require: true,
  },
  MaritalStatus: {
    type: String,
    require: true,
  },
  Age: {
    type: String,
    require: true,
  },
  Languages: {
    type: String,
    require: true,
  },
  Gender: {
    type: String,
    require: true,
  },
  Address: {
    type: String,
    require: true,
  },
  //Registration Form
  Typesection: {
    type: String,
    enum: ["applicant", "recruiter"],
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  contactNumber: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  originalPassword: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("userData.data", userData);
