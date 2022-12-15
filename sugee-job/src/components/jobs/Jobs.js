import React from 'react'

import Filter from '../filter/Filter'
import JobLists from './JobLists'

const Jobs = () => {
  return (
    <div className='jobs'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-4'>
                <Filter/>
            </div>
            <div className='col-lg-8'>
                <JobLists/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
