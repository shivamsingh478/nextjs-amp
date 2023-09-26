import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    const [masterData, setMasterData] = useState(null);
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchMasterData = async () => {
            try {
                const response = await fetch('https://api2.helperplace.com/mobile/masterdata/GetAllMasterDataJson?country=0&lang=en');
                const data = await response.json();
                setMasterData(data);

                const jobResponse = await fetch(`https://api2.helperplace.com/mobile/jobfilter/GetJobByUrl?job_post_url=${slug.join('/')}&lang=en`);
                const jobData = await jobResponse.json();
                setJob(jobData);
            } catch (error) {
                console.error('Error fetching master data:', error);
            }
        };
        fetchMasterData();
    }, []);

    return (
        <div>
            {slug.join('/')}
            {job?.job_id}
        </div>
    );
};

export default jobDetails;