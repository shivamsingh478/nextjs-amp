import Image from 'next/image';
import React, { useState } from 'react';
export const config = { amp: true };

const FindJob = () => {
  const [sortBy, setSortBy] = useState(1);
  const handleSortByChange = (e: any) => {
    setSortBy(e.target.value);
  };
  const jobs = [{
    id: 1,
    job_title: 'Four Adults only Urgently needed helper',
    meta_data: 'Looking for additional helper currently in Hong Kong Chinese Family consist of Four Adults only Urgently needed helper who is: * Immediately Available / asap * Smart, positive, responsible,humble, honest * Willing to share work with another helper. *',
    job_type: 'Full Time',
    start_date: '22 Nov 2023',
    very_active: 1,
    family_type: '2 adults + 2 kids | Chinese',
    employer_natinality: 'Chinese',
    employer_location: 'Hong Kong',
    icon_thumbnail: 'https://cdn.helperplace.com/misc/jpi/nf/Dog-sm.webp',
    job_post_url: 'united-arab-emirates/domestic-helper/chinese-family-2-adult-1baby-looking-for-a-maid/39924',
    post_manager: 'Direct',
    job_position: 'Domestic Helper',
  }];
  return (
    <div className="main">
      <div className="header border-2 text-center h-16">
        <h1>HEADER</h1>
      </div>
      <div className="container m-auto mt-10 flex flex-col gap-3">
        <div className="help-content bg-stone-50 p-5 border rounded border-slate-400">
          <h2 className='text-accent text-3xl font-bold mb-4'>
            <span className='border-b-4 border-secondary'>Search & Find A Job</span>
          </h2>
          <p>A lot of employers are ready to hire you. Choose your region and get full access to all our job offers. With more than 160,000 users and ethical values, we support you to find a better job and connect with our Employers. HelperPlace is totally free for all our job seekers, no placement fees and no salary deduction!</p>
        </div>
        <div className="sort flex justify-end gap-2">
          <div className="accent font-medium">Sort By : </div>
          <amp-selector className="border" name="sortBy">
            <div option="1">Publish Date</div>
            <div option="2">Last Active</div>
            <div option="3">Start Date</div>
          </amp-selector>
        </div>
        <div className="filter-jobs flex items-start gap-3">
          <div className="filter w-3/12 bg-stone-50 p-5 border rounded border-slate-400 lg:flex hidden">Filter</div>
          <div className="jobs w-full">
            {jobs.map((job) => (
              <div key={job.id} className="job relative w-full shadow-xl flex gap-4 p-3 rounded-lg">
                <div className='profile flex flex-col gap-3 min-w-[15%]'>
                  <div className='pic'>
                    <Image className='rounded-full border border-slate-400' src={job.icon_thumbnail} alt='Profile Pic' loading='lazy' width={143} height={143} />
                  </div>
                  <div className='badge bg-primary text-white text-center p-0.5 -ml-3'>
                    <span>{job.post_manager}</span>
                  </div>
                </div>
                <div className='detail'>
                  <div className='title'>
                    <h3 className='text-xl font-semibold text-accent'> {job.job_title} </h3>
                  </div>
                  <div className='info-1 flex md:flex-row flex-col md:gap-1 font-semibold text-slate-600 text-lg'>
                    <span>{job.family_type} | {job.employer_natinality}</span>
                    <span>{job.employer_location}</span>
                  </div>
                  <div className='description line-clamp-3 text-sm md:flex hidden'>
                    <p> {job.meta_data} </p>
                  </div>
                  <div className='info-2 flex md:flex-row flex-col md:gap-6 font-semibold text-lg md:absolute bottom-2'>
                    <h4 className='text-accent'> {job.job_position} | {job.job_type} </h4>
                    <h4 className='text-accent'>  {job.start_date}  </h4>
                    {job.very_active ?
                      <h4 className='text-primary'>  Very Active   </h4>
                      : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default FindJob;