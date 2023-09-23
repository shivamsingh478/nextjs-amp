import Image from 'next/image';
import { useAmp } from "next/amp";
import '../styles/globals.css';

export const config = { amp: 'hybrid' };

const findJob = () => {
    const isAmp = useAmp();
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
                    <select className="border" value="1">
                        <option value="1">Publish Date</option>
                        <option value="2">Last Active</option>
                        <option value="3">Start Date</option>
                    </select>
                </div>
                <div className="filter-jobs flex items-start gap-3">
                    <div className="filter w-3/12 bg-stone-50 p-5 border rounded border-slate-400 md:flex hidden">Filter</div>
                    <div className="jobs w-full">
                        <div className="job relative w-full shadow-xl flex gap-4 p-3 rounded-lg">
                            <div className='profile flex flex-col gap-3 min-w-[15%]'>
                                <div className='pic'>
                                    <Image className='rounded-full border border-slate-400' src='https://cdn.helperplace.com/misc/jpi/nf/Dog-sm.webp' alt='Profile Pic' loading='lazy' width={143} height={143} />
                                </div>
                                <div className='badge bg-primary text-white text-center p-0.5 -ml-3'>
                                    <span>Direct</span>
                                </div>
                            </div>
                            <div className='detail'>
                                <div className='title'>
                                    <h3 className='text-2xl font-semibold text-accent'> Four Adults only (all working)-Urgently needed helper </h3>
                                </div>
                                <div className='info-1 flex gap-1 font-semibold text-slate-600 text-lg'>
                                    <span>2 adults + 2 kids | Chinese</span>
                                    <span>Hong Kong</span>
                                </div>
                                <div className='description '>
                                    <p> Looking for additional helper currently in Hong Kong Chinese Family consist of Four Adults only Urgently needed helper who is: * Immediately Available / asap * Smart, positive, responsible,humble, honest * Willing to share work with another helper. * </p>
                                </div>
                                <div className='info-2 flex gap-6 font-semibold text-lg absolute bottom-2'>
                                    <h4 className='text-accent'> Domestic Helper | Full Time </h4>
                                    <h4 className='text-accent'>  From 22 Nov 2023  </h4>
                                    <h4 className='text-primary'>  Very Active   </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    );
};

export default findJob;