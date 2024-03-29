import React, { createContext, useCallback, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./CompanySide/components/Dashboard";
import MyModel from "./componants/Common/MyModel";
import Home from "./componants/Common/Home";
import Cookies from "js-cookie";
import { useState } from "react";
import LoginMain from "./componants/login/LoginMain";
import Signup from "./componants/signup/Signup";
import Jobs from "./componants/Common/Jobs";

import CompanyProfile from "./CompanySide/profile/CompanyProfile";
import NotFound from "./componants/Common/Notfound";
import Check from "./Auth/check";
import RenderModal from "./render-model/RenderModal";
import Nearbyusers from "./componants/Common/nearbyusers";
import Profile from "./componants/Common/profile";
import Search from "./componants/Common/search";
import JobsList from "./UserSide/JobsList";
import Postajob from "./componants/Common/postajob";
import { Country, State, City } from "country-state-city";
import TermAndConditions from "./componants/Footers/TermAndConditions";
import GetHelp from "./componants/Footers/GetHelp";
import SearchSection from "./componants/Common/SearchSection";
import SavedJobsPage from "./componants/Common/SavedJobsPage";
import { ToastContainer, Slide } from "react-toastify";
import ListUsers from "./UserSide/ListUsers";
import ProtectedRoute from "./CompanySide/Protected/ProtectedRoute";
import LoginAsUser from "./UserSide/LoginAsUser";
import LoginAsCompany from "./CompanySide/components/LoginAsCompany";
import Sidebar from "./CompanySide/sidebar/Sidebar";
import JobListing from "./CompanySide/components/JobListing";

const App = () => {
    const [modell, setModell] = useState(false);
    return (
        <>

            {modell ? <MyModel setModell={setModell}></MyModel> : ""}
            <BrowserRouter>
                <ToastContainer
                    style={{ zIndex: "10000000000" }}
                    position="bottom-left"
                    autoClose={2000}
                    limit={1}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    transition={Slide}
                />
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/home" element={<Home setModell={setModell} />} />
                        <Route path="/saved" element={<Nearbyusers />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/postajob" element={<Postajob />} />
                        <Route path="/network" element={<ListUsers />} />
                        <Route path="/saved" element={<SavedJobsPage />} />
                        <Route path="/search" element={<SearchSection />} />
                        <Route path={"/jobs/:id"} element={<Jobs />} />
                        <Route path={"/jobs"} element={<JobsList />} />
                    </Route>
                    <Route element={<Sidebar />}>
                        <Route path={"/dashboard"} element={<Dashboard />} />
                        <Route path={"/companyprofile"} element={<CompanyProfile />} />
                        <Route path={"/joblisting"} element={<JobListing />} />
                    </Route>
                    <Route path={"/loginascompany"} element={<LoginAsCompany />} />
                    <Route path={"/loginasuser"} element={<LoginAsUser />} />
                    <Route path={"/signup"} element={<Signup />} />
                    <Route path={"/gethelp"} element={<GetHelp />} />
                    <Route path={"/termandconditions"} element={<TermAndConditions />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default App;
