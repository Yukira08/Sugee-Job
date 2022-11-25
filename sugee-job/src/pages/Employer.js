import React from "react";
import Profile from "../components/home/Profile";
import Categories from "../components/employer/Categories";
import Heroes from "../components/employer/Heroes";
import Partner from "../components/employer/Partner";
import Step from "../components/employer/Step";
import CTA from "../components/employer/CTA";



const Employer = () => {
    return <div>
        <Heroes/>
        <Partner/>
        <Step/>
        <Categories/>
        <Profile />   
        <CTA/>
    </div>
}

export default Employer;