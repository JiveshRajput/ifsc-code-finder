import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import axiosFetchBankDataInstance from '../../middlewares/axiosInstance/AxiosInstance';
import IfscDetailTable from '../../components/IfscDetailTable';
import SetHeaders from '../../components/SetHeaders';
import { useEffect } from 'react';

function MicrShowDetailPage({ fetchedFullDataDetails, isError }) {
    const router = useRouter();
    const { websiteName } = useSelector(st => st.websiteDetails)
    const { micrCodeSlug } = router.query;
    const { IFSC, MICR, BANK, BRANCH, ADDRESS, STATE, CITY, DISTRICT } = fetchedFullDataDetails;

    useEffect(() => {
        if (isError) {
            router.push('/');
            alert('Something went wrong.\nPlease try again.');
        }
    }, [isError])

    return (
        <>
            <SetHeaders
                title={`${micrCodeSlug} Full details | ${micrCodeSlug} IFSC Code Bank details, address, mobile number, micr code | ${websiteName}`}
                description={`${micrCodeSlug} Full details | ${micrCodeSlug} IFSC Code Bank details, address, mobile number, micr code | ${websiteName}`}
                url={`${router.pathname}`}
            />
            <h1 className='sectionHeaderTitle'>Bank <span>Details</span></h1>
            <div className="pageContainer">
                <IfscDetailTable details={fetchedFullDataDetails} />
                <section className="descriptionContainer">
                    <h1 className='descriptionHeading'><span>{IFSC}</span> IFSC Code Details</h1>
                    <p className='descriptionPara'>The <span>{BRANCH}</span> Branch IFSC code is <span>{IFSC}</span> and address is <span>{ADDRESS}, {CITY}, {DISTRICT}, {STATE}</span>. The IFSC Code stands for Indian Financial System Code. It is an alphanumeric code that facilitates electronic funds transfer in India while using NEFT, RTGS, IMPS, or UPI. The <span>{BRANCH}</span> Branch MICR code is <span>{MICR}.</span></p>
                </section>
                <section className="descriptionContainer">
                    <h1 className='descriptionHeading'>What is <span>{BRANCH}</span> Branch IFSC Code?</h1>
                    <p className='descriptionPara'>The <span>{BRANCH}</span> Branch IFSC code is <span>{IFSC}</span>. The IFSC Code stands for Indian Financial System Code. It is an alphanumeric code that facilitates electronic funds transfer in India while using NEFT, RTGS, IMPS, or UPI. In the IFSC Code <span>{IFSC}</span>, <span>{IFSC?.slice(0, 4) || 'Bank Code'}</span> represents <span>{BANK}</span> and <span>{IFSC?.slice(-6, 11) || 'Branch Code'}</span> is the branch code of <span>{BANK}</span>, <span>{BRANCH}</span>.
                    </p>
                </section>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const { micrCodeSlug } = context.query;
    let fetchedFullDataDetails = {};
    let isError = false;
    try {
        const res = await axiosFetchBankDataInstance({
            url: "api/micr",
            data: { MICR: micrCodeSlug }
        })
        fetchedFullDataDetails = res.data.data;
    } catch (err) {
        console.log(`${err.message}\nNavigating to home page.`);
        isError = true;
    }
    return {
        props: { fetchedFullDataDetails, isError }
    }
}


export default MicrShowDetailPage
