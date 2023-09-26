import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaAlignLeft } from 'react-icons/fa';
export const config = { amp: true };

export async function getServerSideProps(context: any) {
    const { slug } = context.query;

    return {
        props: {
            slug,
        },
    };
}

const jobDetails = ({ slug }: any) => {
    // const [masterData, setMasterData] = useState(null);
    // const [job, setJob] = useState(null);

    // useEffect(() => {
    //     const fetchMasterData = async () => {
    //         try {
    //             const response = await fetch('https://api2.helperplace.com/mobile/masterdata/GetAllMasterDataJson?country=0&lang=en');
    //             const data = await response.json();
    //             setMasterData(data);

    //             const jobResponse = await fetch(`https://api2.helperplace.com/mobile/jobfilter/GetJobByUrl?job_post_url=${slug.join('/')}&lang=en`);
    //             const jobData = await jobResponse.json();
    //             setJob(jobData);
    //         } catch (error) {
    //             console.error('Error fetching master data:', error);
    //         }
    //     };
    //     fetchMasterData();
    // }, []);

    return (
        <div>
            <div className="header flex border-b-2">
                <div className="left-align">
                    <FaAlignLeft />
                </div>
                <div className="logo">
                    {/* @ts-ignore */}
                    <amp-img
                        width="180"
                        height="50"
                        src="https://www.helperplace.com/assets/images/helperplace_logo.svg"
                        alt="logo"
                        layout="responsive"
                    />
                </div>
            </div>
            <div className="content">
                <div className="main">
                    <div className="background">
                        {/* @ts-ignore */}
                        <amp-img
                            class="cover-image"
                            width="180"
                            height="50"
                            src="https://www.helperplace.com/assets/images/misc/1-sm.webp"
                            alt="logo"
                            layout="responsive"
                        />
                        <div className="very-active bg-primary text-white">
                            Very Active
                        </div>
                    </div>
                    <div className="profile-title">
                        <div className="profile">
                            {/* @ts-ignore */}
                            <amp-img
                                class="profile-image"
                                width="180"
                                height="50"
                                src="https://cdn.helperplace.com/misc/jpi/3/Couple%20baby%201-sm.webp"
                                alt="logo"
                                layout="responsive"
                            />
                            <div className="badge">Direct</div>
                        </div>
                        <div className="title"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default jobDetails;