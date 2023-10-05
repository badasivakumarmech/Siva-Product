import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Registration from "./Registration";

import LoginPage from "./LoginPage";
import BrowserJobs from "./BrowserJobs";
import Jobs from "./Jobs";
import ProfileCode from "./Profile";
import ResumeDetails from "./Resume";
// import MainForm from './Empty';
import AppliedJobs from "./Applied";
import JobAlert from "./JobAlert";
import SaveJobs from "./SaveJobs";
import ChangePassword from "./ChangePassword";
import JobCompanyDetails from "./JobCompanyDetails";
import JobLocationDetails from "./JobLocationDetails";
import JobCategoryDetails from "./JobCategoryDetails";
import JobDesignationDetails from "./JobDesignationDetails";
import JobSkillsDetails from "./JobSkillsDetails";
import PaymentMethod from "./PaymentMethod";
import PracticeSection from "./Practice";
import OwnWebsite from "./OwnWebsite";
import ForgotPassword from "./ForgotPassword";
import GetData from "./Practice123";
import TodosList from "./FinalTodosList";
import ReCompanyProfile from "./Re-Company-Profile";
import RePostJob from "./Re-Post-Job";
import ReChangePassword from "./Re-Change-pas";
import ReDashBoard from "./Re-Dashboard";
import Profile11 from "./Practice123profile";
// import MyPlayer from "./Practice";
 


function App() { 
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path='/' element={<Home />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Contact' element={<Contact />} /> */}
        <Route exact path="/" element={<Registration />} />
        <Route exact path="/BrowserJobs" element={<BrowserJobs />} />
        <Route exact path="/Jobs" element={<Jobs />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/ProfileCode" element={<ProfileCode />} />
        <Route exact path="/ResumeDetails" element={<ResumeDetails />} />
        <Route exact path="/AppliedJobs" element={<AppliedJobs />} />
        <Route exact path="/JobAlert" element={<JobAlert />} />
        <Route exact path="/PracticeSection" element={<PracticeSection />} />
      <Route exact path="/OwnWebsite" element ={<OwnWebsite />} />
        
        <Route exact path="/SaveJobs" element={<SaveJobs />} />
        <Route exact path="/ChangePassword" element={<ChangePassword />} />
        <Route exact path="/JobCategoryDetails" element={<JobCategoryDetails />} />
        <Route exact path="/JobDesignationDetails" element={<JobDesignationDetails />} />
        <Route exact path="/JobSkillsDetails" element={<JobSkillsDetails />} />
       <Route exact path="/PaymentMethod" element = {<PaymentMethod />} />
      < Route export path = "/ForgotPassword" element = {<ForgotPassword />}/>
      < Route export path = "/GetData" element = {<GetData />}/>
      < Route export path="/TodosList" element = {<TodosList />}/>
      < Route export path="/ReCompanyProfile" element = {<ReCompanyProfile />}/>
      < Route export path="/RePostJob" element = {<RePostJob />}/>
      < Route export path="/ReChangePassword" element = {<ReChangePassword />}/>
      < Route export path="/ReDashBoard" element = {<ReDashBoard />}/>
      < Route export path="/Profile11" element = {<Profile11 />}/>





        <Route exact
          path="/JobCompanyDetails"
          element={<JobCompanyDetails />}
        />
        <Route
          exact
          path="/JobLocationDetails"
          element={<JobLocationDetails />}
        />
        {/* <Route exact path='/MainForm' element={<MainForm />} /> */}

        <Route exact path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
