import React, { Fragment } from "react";

import SearchForm from "../components/search/SearchForm";
import Jobs from "../components/jobs/Jobs";

const BrowseJobs = () => {
    return (
        <Fragment>
            <SearchForm/>
            <Jobs/>
        </Fragment>
    )

}

export default BrowseJobs;