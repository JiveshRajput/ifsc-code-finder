import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import SetHeaders from '../../../../../../components/SetHeaders'
import axiosFetchBankDataInstance from '../../../../../../middlewares/axiosInstance/AxiosInstance'
import IfscDetailTable from '../../../../../../components/IfscDetailTable'
import { nameConverter } from '../../../../../../utils/RoutingFormats';

function BranchDetailRoute({ fetchedFullDataDetails, isError }) {
    const { IFSC, MICR, BANK, BRANCH, ADDRESS, STATE, CITY, DISTRICT } = fetchedFullDataDetails;
    const { websiteName } = useSelector(st => st.websiteDetails)
    const router = useRouter();
    const { bankNameSlug, stateNameSlug, districtNameSlug, branchNameSlug } = router.query;
    const bankname = nameConverter(bankNameSlug);
    const statename = nameConverter(stateNameSlug);
    const districtname = nameConverter(districtNameSlug);
    const branchname = nameConverter(branchNameSlug);

    if (isError) {
    alert('Something went wrong.\nPlease try again.');
    router.push('/');
    return;
    }

    return (
        <>
            <SetHeaders
                title={`${bankname} ${statename} ${districtname} ${branchname} All branches full details | ${websiteName}`}
                description={`${bankname} ${statename} ${districtname} ${branchname} All branches full details page | ${websiteName}`}
                url={`${router.pathname}`}
            />
            <h1 className='sectionHeaderTitle'>IFSC <span>Details</span></h1>
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
    const { bankNameSlug, stateNameSlug, districtNameSlug, branchNameSlug } = context.query;
    const capsBankName = nameConverter(bankNameSlug);
    const capsStateName = nameConverter(stateNameSlug);
    const capsDistrictName = nameConverter(districtNameSlug);
    const capsBranchName = nameConverter(branchNameSlug);
    let fetchedFullDataDetails = {};
    let isError = false;
    try {
        const res = await axiosFetchBankDataInstance({
            url: "api/get-bank",
            data: {
                BANK: capsBankName,
                STATE: capsStateName,
                CITY: capsDistrictName,
                BRANCH: capsBranchName,
            }
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

export default BranchDetailRoute

