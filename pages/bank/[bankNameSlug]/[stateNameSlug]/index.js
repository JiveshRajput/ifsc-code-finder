import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import MainHome from '../../../../components/MainHome'
import SetHeaders from '../../../../components/SetHeaders'
import { nameConverter } from '../../../../utils/RoutingFormats';
import axiosFetchBankDataInstance from '../../../../middlewares/axiosInstance/AxiosInstance';

function StateDetailRoute(fetchedDataFromServer) {
  const { websiteName } = useSelector(st => st.websiteDetails)
  const router = useRouter();
  const { bankNameSlug, stateNameSlug } = router.query;
  const bankname = nameConverter(bankNameSlug);
  const statename = nameConverter(stateNameSlug);

  return (
    <>
      <SetHeaders
        title={`${bankname} ${statename} All branches full details | ${websiteName}`}
        description={`${bankname} ${statename} All branches full details page | ${websiteName}`}
        url={`${router.pathname}`}
      />
      <MainHome fetchedDataFromServer={fetchedDataFromServer} />
      <section className="pageContainer">
        <div className="descriptionSectionContainer">
          <div className="descriptionContainer">
            <h1 className='descriptionHeading'><span>{bankname}</span> IFSC Codes in <span>{statename}</span></h1>
            <p className='descriptionPara'>You can find <span>{statename}</span> <span>{bankname}</span> NEFT, RTGS and IMPS codes in the table alongside. <span>{bankname}</span> NEFT, RTGS and IMPS code is same as IFSC code and used in net banking. Benefit of this fund transfer is, its paperless i.e. there is no need to write cheques or demand drafts. Thus it saves time, effort and energy. Most significantly it saves time as inter-state cheques no longer exists!</p>
          </div>
          <div className="descriptionContainer">
            <h1 className='descriptionHeading'>How to Find IFSC Code for  <span>{bankname}</span>, <span>{statename}</span>?</h1>
            <p className='descriptionPara'><span>{bankname}</span> IFSC code list in <span>{statename}</span> is given in the table alongside. Details including address and contact numbers of branches of <span>{bankname}</span> with IFSC code in <span>{statename}</span> are also provided. You can narrow down your search either by selecting any particular district from the drop down list or by selecting the link for district in the table on the right side. You can find Industrial Credit And Investment Corporation Of India, <span>{statename}</span> list of IFSC Codes here.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const { bankNameSlug, stateNameSlug } = context.query;
  let bankValue = nameConverter(bankNameSlug);
  let stateValue = nameConverter(stateNameSlug);
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
        url: "api/bank-name/state/city",
        data: {
          BANK: bankValue,
          STATE: stateValue,
        },
      })
      ifscFetchedDetails.districtList = res.data.data;
      searchIfscDetails.bank = res.data.requestBody.BANK;
      searchIfscDetails.state = res.data.requestBody.STATE;
    }
  } catch (err) {
    console.log(`${err.message}\nNavigating to home page.`);
    isError = true;
  }
  return {
    props: { ifscFetchedDetails, searchIfscDetails, isError }
  }
}


export default StateDetailRoute
