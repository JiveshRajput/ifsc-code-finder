import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import MainHome from '../../../../../components/MainHome'
import SetHeaders from '../../../../../components/SetHeaders'
import { nameConverter } from '../../../../../utils/RoutingFormats';
import axiosFetchBankDataInstance from '../../../../../middlewares/axiosInstance/AxiosInstance';

function DistrictDetailRoute(fetchedDataFromServer) {
  const { websiteName } = useSelector(st => st.websiteDetails)
  const router = useRouter();
  const { bankNameSlug, stateNameSlug, districtNameSlug } = router.query;
  const bankname = nameConverter(bankNameSlug);
  const statename = nameConverter(stateNameSlug);
  const districtname = nameConverter(districtNameSlug);

  return (
    <>
      <SetHeaders
        title={`${bankname} ${statename} ${districtname} All branches full details | ${websiteName}`}
        description={`${bankname} ${statename} ${districtname} All branches full details page | ${websiteName}`}
        url={`${router.pathname}`}
      />
      <MainHome fetchedDataFromServer={fetchedDataFromServer} />
      <section className="pageContainer">
        <div className="descriptionSectionContainer">
          <div className="descriptionContainer">
            <h1 className='descriptionHeading'><span>{bankname}</span> IFSC Code in <span>{districtname}</span></h1>
            <p className='descriptionPara'><span>{bankname}</span> IFSC code in <span>{districtname}</span> in <span>{statename}</span> state is used in internet banking for transferring funds between any two bank branches. These IFSC codes for <span>{bankname}</span> <span>{districtname}</span> are used to identify the branches participating in online transactions via RTGS, NEFT and IMPS systems. Therefore, each branch of <span>{bankname}</span> in <span>{districtname}</span> supporting net banking has its unique IFSC code. Industrial Credit And Investment Corporation Of India IFSC code list in <span>{districtname}</span> is provided by RBI. NOTE that all branches of a bank cannot provide online fund transfer systems, only those approved by RBI can provide such facility.</p>
          </div>
          <div className="descriptionContainer">
            <h1 className='descriptionHeading'>How to Find <span>{bankname}</span> IFSC Code in <span>{districtname}</span> ?</h1>
            <p className='descriptionPara'><span>{bankname}</span>, <span>{statename}</span>, <span>{districtname}</span> IFSC codes are given in the table alongside. Details like address and contact numbers of branches of <span>{bankname}</span> with IFSC code in <span>{districtname}</span> are also provided. Simplify your search either by selecting any particular city from the drop down list or by selecting the link for city in the table on the right side. You can find IFSC codes for all Industrial Credit And Investment Corporation Of India <span>{districtname}</span> branches here.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const { bankNameSlug, stateNameSlug, districtNameSlug } = context.query;
  let bankValue = nameConverter(bankNameSlug);
  let stateValue = nameConverter(stateNameSlug);
  let districtValue = nameConverter(districtNameSlug);
  let ifscFetchedDetails = {
    bankList: [],
    stateList: [],
    districtList: [],
    branchList: []
  };
  let searchIfscDetails = {
    bank: '',
    state: '',
    district: '',
    branch: ''
  }
  let isError = false;
  try {
    if (bankNameSlug && stateNameSlug) {
      let res = await axiosFetchBankDataInstance({
        url: "api/get-branch",
        data: {
          BANK: bankValue,
          STATE: stateValue,
          CITY: districtValue
        }
      })
      ifscFetchedDetails.branchList = res.data.data;
      searchIfscDetails.bank = res.data.requestBody.BANK;
      searchIfscDetails.state = res.data.requestBody.STATE;
      searchIfscDetails.district = res.data.requestBody.CITY;
    }
  } catch (err) {
    console.log(`${err.message}\nNavigating to home page.`);
    isError = true;
  }
  return {
    props: { ifscFetchedDetails, searchIfscDetails, isError }
  }
}

export default DistrictDetailRoute
